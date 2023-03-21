import React, { useState } from "react";
import EditModal from "../editModal/EditModal";
import Modal from "react-modal";
import TableRow from "../tableRow/TableRow";
import "./style.css";

const Csv = ({ csvData, addRow }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  let count = 0;
  const csvDataWithId = csvData.map((element) => ({
    id_react: (count += 1),
    ...element,
  }));
  
  const headerData = Object.keys(Object.assign({}, ...csvDataWithId));
  const [dataWithId, setDataWithId] = useState(csvDataWithId);

  const handleEdit = (rowData) => {
    setSelectedRow(rowData);
    setModalIsOpen(true);
  };

  const handleDelete = (id) => {
    setDataWithId(dataWithId.filter((item) => item.id_react !== id));
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      {csvDataWithId && csvDataWithId.length > 0 && (
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
            {csvDataWithId.map((rowData, index) => (
              <TableRow
                rowData={rowData}
                key={index}
                index={index}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            ))}
          </tbody>
        </table>
      )}
      <EditModal
        modalIsOpen={modalIsOpen}
        handleModalClose={handleModalClose}
      />
    </>
  );
};

export default Csv;
