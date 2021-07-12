import React from "react";

const Modal = ({ isOpen, closeModal, title, children }) => {
  if (isOpen) {
    return (
      <div className="modal">
        <div className="modal-card">
          <div className="closeModal" onClick={()=> closeModal(false)}>
            x
          </div>
          <div className="title">{title}</div>
          <main className="body">{children}</main>
        </div>
      </div>
    );
  }
  return <></>;
};

export default Modal;
