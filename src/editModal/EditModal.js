import React from "react";
import Modal from "react-modal";

const EditModal = ({ modalIsOpen, handleModalClose }) => {
  return (
    <Modal isOpen={modalIsOpen}>
      <p>This one is opened!</p>
      <button onClick={handleModalClose}>Close</button>
    </Modal>
  );
};

export default EditModal;
