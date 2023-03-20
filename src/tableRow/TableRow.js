import React from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";
import "./style.css";

const TableRow = ({ rowData }) => {
  
  return (
    <tr>
      {Object.values(rowData).map((item, index) => (
        <td key={index}>{item}</td>
      ))}
      <td>
        <FiEdit2 className="edit-icon" />
      </td>
      <td>
        <FiDelete className="delete-icon" />
      </td>
    </tr>
  );
};

export default TableRow;
