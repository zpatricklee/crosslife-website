import { getAuth } from "firebase/auth";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "./firebase";

const AUTH_KEY = "isAdminAuthenticated";
const ADMIN_PASSWORD = "crosslife2025"; // Change this to your desired password

export function login(password) {
  if (password === ADMIN_PASSWORD) {
    localStorage.setItem(AUTH_KEY, "true");
    return true;
  }
  return false;
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
}

export function isAuthenticated() {
  return localStorage.getItem(AUTH_KEY) === "true";
}

export async function isAdminUser() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user || !user.email) return false;
  const adminDoc = await getDoc(doc(collection(db, "admins"), user.email));
  return adminDoc.exists();
}
