import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";
import { initializeFirebase } from "./firebase";

initializeFirebase();
const db = getFirestore();

const COLLECTIONS = Object.freeze({
  USERS: "users",
  PROJECTS: "projects",
});

const usersRef = collection(db, COLLECTIONS.USERS);
const projectsRef = collection(db, COLLECTIONS.PROJECTS);

const queryUser = async (userId: string) => {
  const q = query(usersRef, where("uid", "==", userId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => doc.data());
};

const addUser = async (userId: string, userData: IUser) => {
  await setDoc(doc(db, COLLECTIONS.USERS, userId), userData);
};

const queryProjects = async (ownerId: string): Promise<IProject[]> => {
  const q = query(projectsRef, where("ownerId", "==", ownerId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((doc) => doc.data) as unknown[] as IProject[];
};

export { queryUser, addUser, queryProjects };
