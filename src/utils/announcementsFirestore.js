import { db } from './firebase';
import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc, writeBatch, query, orderBy } from 'firebase/firestore';

const ANNOUNCEMENTS_COLLECTION = 'announcements';

export async function fetchAnnouncements() {
  const q = query(collection(db, ANNOUNCEMENTS_COLLECTION), orderBy('order', 'asc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export async function addAnnouncement(announcement) {
  // If no order, set to timestamp
  const order = typeof announcement.order === 'number' ? announcement.order : Date.now();
  return await addDoc(collection(db, ANNOUNCEMENTS_COLLECTION), { ...announcement, order });
}

export async function deleteAnnouncement(id) {
  return await deleteDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id));
}

export async function updateAnnouncement(id, data) {
  return await updateDoc(doc(db, ANNOUNCEMENTS_COLLECTION, id), data);
}

export async function batchUpdateAnnouncementOrders(announcements) {
  const batch = writeBatch(db);
  announcements.forEach(a => {
    batch.update(doc(db, ANNOUNCEMENTS_COLLECTION, a.id), { order: a.order });
  });
  await batch.commit();
}
