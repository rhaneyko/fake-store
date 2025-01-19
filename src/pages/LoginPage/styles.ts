import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  font-family: "DM Sans", sans-serif;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #D5D5D5;
  border-radius: 40px;
`;

export const FormLogin = styled.form`
  width: 100%;
`;

export const InputWrapper = styled.div`
  margin: 20px;
`;

export const InputField = styled.input`
  width: 300px;
  height: 40px;
  padding-left: 15px;
  border: 1px solid #171717;
  border-radius: 40px;
`;

export const ButttonLogin = styled.button`
  width: 300px;
  height: 40px;
  margin: 20px;
  border: 1px solid #171717;
  border-radius: 40px;
  background-color: #171717;
  color: #fff;
  font-size: 0.925rem;
`;

export const GoogleLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-size: 14px;
    font-weight: bold;
    color: #333;
    margin: 5px;
  }
`;

export const ButtonGoogleLogin = styled.button`
  margin: 20px;
  height: 50px;
  width: 50px;
  border: 1px solid #D5D5D5;
  border-radius: 40px;
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: 2rem;
`;

export const RegisterButton = styled.button`
  width: 300px;
  height: 40px;
  margin: 20px;
  border: 1px solid #171717;
  border-radius: 40px;
  background-color: #171717;

  .register-text{
    text-decoration: none;
  }
`;

export const RegisterButtonText = styled.span`
  color: #FFF;
  text-decoration: none;
  font-size: 0.925rem;
`;
