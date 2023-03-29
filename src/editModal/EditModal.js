import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const EditModal = ({ isEditing, rowData, handleSave, handleModalClose }) => {
  
  const [editedData, setEditedData] = useState(rowData || {});

  useEffect(() => {
    setEditedData(rowData || {} );
  }, [rowData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = () => {
    handleSave(editedData);
  };

  return (
    <ReactModal isOpen={isEditing}>
      <div className="modal-content">
        <h2>{rowData.id_react ? "Edit Row" : "Add Row"}</h2>

        {Object.entries(editedData).map(([key, value]) => (
          <div key={key}>
            <label>{key}</label>
            <input
              type="text"
              name={key}
              value={value}
              onChange={handleChange}
            />
          </div>
        ))}
      </div>
      <button onClick={handleSubmit}>Save</button>
      <button onClick={handleModalClose}>Cancel</button>
    </ReactModal>
  );
};

export default EditModal;
