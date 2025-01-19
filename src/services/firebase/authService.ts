import { auth } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";

export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await updateProfile(user, { displayName: name });

    console.log("Usuário registrado com sucesso:", user);
    return user;
  } catch (error: any) {
    console.error("Erro ao registrar usuário:", error.message);
    throw new Error(error.message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Usuário logado com sucesso:", userCredential.user);
    return userCredential.user;
  } catch (error: any) {
    console.error("Erro ao logar usuário:", error.message);
    throw new Error(error.message);
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);


    const user = result.user;
    console.log("Usuário logado com Google:", user);
    return user;
  } catch (error: any) {
    console.error("Erro ao logar com Google:", error.message);
    throw new Error(error.message);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log("Usuário deslogado com sucesso.");
  } catch (error: any) {
    console.error("Erro ao deslogar usuário:", error.message);
    throw new Error(error.message);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};
