import React, { useState } from "react";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { loginUser, loginWithGoogle } from "../../services/firebase/authService";
import {
  Container,
  FormLogin,
  InputWrapper,
  InputField,
  GoogleLoginContainer,
  ButtonGoogleLogin,
  GoogleIcon,
  ButttonLogin,
  FormContainer,
  RegisterButton,
  RegisterButtonText,
} from './styles'

const LoginPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.from || "/";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      alert("Usuário logado com sucesso!");
      setEmail("");
      setPassword("");

      navigate(redirectPath)
    } catch (error: any) {
      setError(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      alert("Usuário logado com Google!");

      navigate(redirectPath)
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <FormContainer>
        <FormLogin onSubmit={handleLogin}>
          <InputWrapper>
            <InputField
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <InputWrapper>
            <InputField
              type="password"
              placeholder="Senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputWrapper>
          <ButttonLogin type="submit">
            <span>Fazer login</span>
          </ButttonLogin>
        </FormLogin>
        <GoogleLoginContainer>
          <span>ou</span>
          <span>Faça login com rede social </span>
          <ButtonGoogleLogin onClick={handleGoogleLogin} >
            <GoogleIcon />
          </ButtonGoogleLogin>
        </GoogleLoginContainer>
        <RegisterButton>
          <NavLink to="/register" className="register-text">
            <RegisterButtonText>
              Quero me cadastrar
            </RegisterButtonText>
          </NavLink>
        </RegisterButton>
      </FormContainer>

    </Container>
  )
}

export default LoginPage