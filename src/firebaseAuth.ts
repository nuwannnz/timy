import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeFirebase } from "./firebase";
import { addUser, queryUser } from "./firestoreQueries";

initializeFirebase();

const googleAuth = new GoogleAuthProvider();
const auth = getAuth();

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuth);

    const user = res.user;

    const savedUsers = await queryUser(user.uid);

    if (savedUsers.length === 0) {
      // save new user
      const newUser: IUser = {
        name: user.displayName as string,
        email: user.email as string,
      };
      await addUser(user.uid, newUser);
    }
  } catch (err) {
    console.error(err);
  }
};

const signOut = () => {
  auth.signOut();
};

export { signInWithGoogle, signOut, auth };
