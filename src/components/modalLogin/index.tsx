import React from "react";
import ReactDOM from "react-dom";

import {
  Overlay,
  ModalContent,
  ButtonsWrapper,
  CancelButton,
  LogoutButton
} from './styles'

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, onLogout }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Overlay>
      <ModalContent>
        <h2>Confirme sair</h2>
        <p>Você tem certeza que deseja sair?</p>
        <ButtonsWrapper>
          <CancelButton onClick={onClose}>Cancelar</CancelButton>
          <LogoutButton onClick={onLogout}>Sair</LogoutButton>
        </ButtonsWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default Modal;