import React, { useState } from "react";
import EditModal from "../editModal/EditModal";
import Modal from "react-modal";
import TableRow from "../tableRow/TableRow";
import "./style.css";

const Csv = ({ csvData, addRow }) => {
  const headerData = Object.keys(Object.assign({}, ...csvData));
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {csvData && csvData.length > 0 && (
        <table>
          <thead>
            <tr>
              {headerData.map((item, i) => (
                <th key={i}>{item}</th>
              ))}
              {headerData.length > 0 && (
                <th>
                  <button onClick={addRow}>Button</button>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {csvData.map((rowData, index) => (
              <TableRow rowData={rowData} key={index} handleEdit={handleEdit} />
            ))}
          </tbody>
        </table>
      )}
      <EditModal modalIsOpen={modalIsOpen}  handleModalClose={handleModalClose}/>
    </>
  );
};

export default Csv;
