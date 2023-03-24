import React, { useState, useEffect } from "react";
import { FiEdit2, FiDelete } from "react-icons/fi";

import "./style.css";

const Csv = ({ csvData, handleAddRow, deleteRow, editRow }) => {
  const headerData = Object.keys(Object.assign({}, ...csvData));

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
                  <button onClick={handleAddRow}>Button</button>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {csvData.map((rowData, index) => (
              <tr key={index}>
                {Object.values(rowData).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <FiEdit2
                    className="edit-icon"
                    onClick={() => editRow(rowData)}
                  />
                </td>
                <td>
                  <FiDelete
                    className="delete-icon"
                    onClick={() => deleteRow(rowData.id_react)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Csv;
