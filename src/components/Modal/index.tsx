import React from "react";
import "./Modal.scss";

interface ModalProps {
  firstName: string;
  lastName: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ firstName, lastName, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <p>
          Hello, {firstName} {lastName}!
        </p>
      </div>
    </div>
  );
};

export default Modal;
