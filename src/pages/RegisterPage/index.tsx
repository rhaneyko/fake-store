import React, { useState } from "react";
import { registerUser, loginWithGoogle } from "../../services/firebase/authService";
import {
    Container,
    FormLogin,
    InputWrapper,
    InputField,
    GoogleLoginContainer,
    ButtonGoogleLogin,
    ButttonLogin,
    FormContainer,
    GoogleIcon,
} from './styles'
import { useLocation, useNavigate } from "react-router";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const redirectPath = location.state?.from || "/";

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await registerUser(name, email, password);
            alert("Usuário registrado com sucesso!");
            setName("");
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
            <h1>Registrar</h1>
            <FormContainer>
                <FormLogin onSubmit={handleRegister}>
                    <InputWrapper>
                        <InputField
                            type="text"
                            placeholder="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required />
                    </InputWrapper>
                    <InputWrapper>
                        <InputField
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </InputWrapper>
                    <InputWrapper>
                        <InputField
                            type="password"
                            placeholder="Senha"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </InputWrapper>
                    <ButttonLogin type="submit">
                        <span>Registrar</span>
                    </ButttonLogin>
                </FormLogin>
                <GoogleLoginContainer>
                    <span>ou</span>
                    <span>Faça registro com rede social </span>
                    <ButtonGoogleLogin onClick={() => handleGoogleLogin()} >
                        <GoogleIcon />
                    </ButtonGoogleLogin>
                </GoogleLoginContainer>
            </FormContainer>

        </Container>
    )
}

export default RegisterPage