const STORAGE_KEY = "announcements";

export function getAnnouncements() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveAnnouncements(announcements) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(announcements));
}

