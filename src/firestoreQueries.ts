import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  setDoc,
  doc,
  addDoc,
  documentId,
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

  return querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as unknown[] as IProject[];
};

const queryProjectById = async (
  projectId: string
): Promise<IProject | null> => {
  const q = query(projectsRef, where(documentId(), "==", projectId));
  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    return null;
  }
  const project = {
    id: querySnapshot.docs[0].id,
    ...querySnapshot.docs[0].data(),
  };
  return project as IProject;
};

const addProject = async (project: IProject): Promise<IProject | null> => {
  const docRef = await addDoc(projectsRef, project);
  const createdDoc = await queryProjectById(docRef.id);
  return createdDoc;
};

export { queryUser, addUser, queryProjects, queryProjectById, addProject };
