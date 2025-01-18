import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { auth } from "../../services/firebase/firebaseConfig";
import {
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { Container } from './styles'

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = new URLSearchParams(location.search).get("redirect") || "/";

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);

  
      navigate(redirectPath);
    } catch (error) {
      console.error("Login Error:", error);
    }
  };
  return (
    <Container>
        <h1>Login</h1>
        <button onClick={handleGoogleLogin}>Login with Google</button>
    </Container>
  )
}

export default LoginPage