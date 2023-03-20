import React from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";
import "./style.css";

const TableRow = ({ rowData, handleEdit }) => {
  return (
    <tr>
      {Object.values(rowData).map((item, index) => (
        <td key={index}>{item}</td>
      ))}
      <td>
        <FiEdit2 className="edit-icon" onClick={() => handleEdit(rowData)} />
      </td>
      <td>
        <FiDelete className="delete-icon" />
      </td>
    </tr>
  );
};

export default TableRow;
