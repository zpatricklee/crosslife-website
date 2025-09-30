import React, { useState, useEffect } from "react";
import { fetchAnnouncements, addAnnouncement, updateAnnouncement, deleteAnnouncement, batchUpdateAnnouncementOrders } from "../utils/announcementsFirestore";
import { getDocs, collection } from "firebase/firestore";
import { onAuthChange, auth, logout as fbLogout } from "../utils/firebaseAuth";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { db } from "../utils/firebase";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styles from './AdminAnnouncements.module.css';
import { FirebaseError } from "firebase/app";

const AdminAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editIdx, setEditIdx] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthChange(user => {
      setIsAuth(!!user);
      if (user) {
        // Debug: log the email used for admin check
        console.log("Signed in user email:", user.email);
      }
      if (!user) navigate("/admin/login");
    });
    return unsubscribe;
  }, [navigate]);

  useEffect(() => {
    async function load() {
      let anns = await fetchAnnouncements();
      // If no announcements found, try fetching all for migration
      if (anns.length === 0) {
        const snapshot = await getDocs(collection(db, 'announcements'));
        anns = snapshot.docs.map((doc, idx) => {
          const data = doc.data();
          return { id: doc.id, ...data, order: typeof data.order === 'number' ? data.order : idx };
        });
        // If any missing order, batch update
        const needsUpdate = anns.some(a => typeof a.order !== 'number');
        if (needsUpdate || anns.length > 0) {
          await batchUpdateAnnouncementOrders(anns);
          anns = await fetchAnnouncements();
        }
      }
      setAnnouncements(anns);
    }
    load();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    try {
      await addAnnouncement({ title, content });
      setTitle("");
      setContent("");
      setEditIdx(null);
      setAnnouncements(await fetchAnnouncements());
      setError("");
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "permission-denied") {
        setError("You do not have permission to add announcements.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleEdit = (idx) => {
    setEditIdx(idx);
    setTitle(announcements[idx].title);
    setContent(announcements[idx].content);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editIdx === null) return;
    const id = announcements[editIdx].id;
    try {
      await updateAnnouncement(id, { title, content });
      setTitle("");
      setContent("");
      setEditIdx(null);
      setAnnouncements(await fetchAnnouncements());
      setError("");
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "permission-denied") {
        setError("You do not have permission to update announcements.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleDelete = async (idx) => {
    const id = announcements[idx].id;
    try {
      await deleteAnnouncement(id);
      setEditIdx(null);
      setTitle("");
      setContent("");
      setAnnouncements(await fetchAnnouncements());
      setError("");
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "permission-denied") {
        setError("You do not have permission to delete announcements.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const moveAnnouncement = async (idx, direction) => {
    const newAnnouncements = [...announcements];
    const targetIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (targetIdx < 0 || targetIdx >= newAnnouncements.length) return;
    // Swap order values
    const tempOrder = newAnnouncements[idx].order;
    newAnnouncements[idx].order = newAnnouncements[targetIdx].order;
    newAnnouncements[targetIdx].order = tempOrder;
    try {
      await batchUpdateAnnouncementOrders([newAnnouncements[idx], newAnnouncements[targetIdx]]);
      setAnnouncements(await fetchAnnouncements());
      setError("");
    } catch (err) {
      if (err instanceof FirebaseError && err.code === "permission-denied") {
        setError("You do not have permission to reorder announcements.");
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  const handleLogout = async () => {
    await fbLogout();
    navigate("/admin/login");
  };

  if (!isAuth) return null;

  return (
    <>
      <NavBar />
      <div className={styles.centerContainer + " mt-4"}>
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3" style={{ maxWidth: 600 }}>
            <h1 style={{ color: '#fff', fontWeight: 700, textAlign: 'center', flex: 1 }}>Announcements Editor</h1>
            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
          </div>
          <form onSubmit={editIdx === null ? handleAdd : handleUpdate} className="mb-4" style={{ maxWidth: 600, background: '#fff', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.12)' }}>
            <div className="mb-2" style={{ maxWidth: 500, margin: '0 auto' }}>
              <input
                className="form-control"
                placeholder="Title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
                style={{ fontWeight: 500, fontSize: '1.1rem', background: '#fff', color: '#222', border: '1px solid #888', borderRadius: 8 }}
              />
            </div>
            <div className="mb-2" style={{ maxWidth: 500, margin: '0 auto' }}>
              <textarea
                className="form-control"
                placeholder="Content"
                value={content}
                onChange={e => setContent(e.target.value)}
                required
                style={{ fontWeight: 400, fontSize: '1rem', background: '#fff', color: '#222', border: '1px solid #888', borderRadius: 8, minHeight: 80 }}
              />
            </div>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', marginTop: 16 }}>
              <button className="btn btn-primary" style={{ minWidth: 120, fontWeight: 600 }} type="submit">
                {editIdx === null ? "Add Announcement" : "Update Announcement"}
              </button>
              {editIdx !== null && (
                <button className="btn btn-secondary" style={{ minWidth: 120, fontWeight: 600 }} type="button" onClick={() => { setEditIdx(null); setTitle(""); setContent(""); }}>
                  Cancel
                </button>
              )}
            </div>
          </form>
          {error && <div style={{ color: 'red', marginBottom: 16 }}>{error}</div>}
          <DragDropContext onDragEnd={(result) => {
            if (!result.destination) return;
            setAnnouncements(prev => {
              const reordered = Array.from(prev);
              const [moved] = reordered.splice(result.source.index, 1);
              reordered.splice(result.destination.index, 0, moved);
              // Reassign order fields
              const updated = reordered.map((a, idx) => ({ ...a, order: idx }));
              batchUpdateAnnouncementOrders(updated);
              return updated;
            });
          }}>
            <Droppable droppableId="announcements-list">
              {(provided) => (
                <ul className={styles.listGroup} ref={provided.innerRef} {...provided.droppableProps}>
                  {announcements.length === 0 && (
                    <li className="list-group-item text-center" style={{ color: '#888' }}>No announcements found.</li>
                  )}
                  {announcements.map((a, idx) => (
                    <Draggable key={a.id} draggableId={a.id} index={idx}>
                      {(dragProvided, dragSnapshot) => (
                        <li
                          className={styles.listItem}
                          style={{
                            background: dragSnapshot.isDragging ? '#e3f2fd' : undefined,
                            boxShadow: dragSnapshot.isDragging ? '0 4px 16px rgba(0,0,0,0.18)' : '0 2px 8px rgba(0,0,0,0.08)',
                            transition: 'box-shadow 0.2s, background 0.2s',
                            width: '100%',
                            margin: 0,
                            ...dragProvided.draggableProps.style
                          }}
                          ref={dragProvided.innerRef}
                          {...dragProvided.draggableProps}
                          {...dragProvided.dragHandleProps}
                        >
                          <div className={styles.announcementContent}>
                            <strong>{a.title}</strong>
                            <div>{a.content}</div>
                          </div>
                          <div className={styles.announcementActions}>
                            <button className={styles.button} onClick={() => handleEdit(idx)}>Edit</button>
                            <button className={styles.button} onClick={() => handleDelete(idx)}>Delete</button>
                          </div>
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </div>
    </>
  );
};

export default AdminAnnouncements;
