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
        <h2>Confirm Logout</h2>
        <p>Are you sure you want to log out?</p>
        <ButtonsWrapper>
          <CancelButton onClick={onClose}>Cancel</CancelButton>
          <LogoutButton onClick={onLogout}>Logout</LogoutButton>
        </ButtonsWrapper>
      </ModalContent>
    </Overlay>,
    document.body
  );
};

export default Modal;