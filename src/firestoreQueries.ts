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
});

const usersRef = collection(db, COLLECTIONS.USERS);

const queryUser = async (userId: string) => {
  const q = query(usersRef, where("uid", "==", userId));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((d) => d.data());
};

const addUser = async (userId: string, userData: IUser) => {
  await setDoc(doc(db, COLLECTIONS.USERS, userId), userData);
};

export { queryUser, addUser };
