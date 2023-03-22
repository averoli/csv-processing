import React, { useState, useEffect } from "react";
import TableRow from "../tableRow/TableRow";
import "./style.css";

const Csv = ({ csvData, handleAddRow, handleEdit }) => {
  const [dataWithId, setDataWithId] = useState([]);

  useEffect(() => {
    setDataWithId(
      csvData.map((element, index) => ({
        id_react: index + 1,
        ...element,
      }))
    );
  }, [csvData]);

  const headerData = Object.keys(Object.assign({}, ...dataWithId));

  const handleDelete = (id) => {
    setDataWithId(dataWithId.filter((item) => item.id_react !== id));
  };

  return (
    <>
      {dataWithId && dataWithId.length > 0 && (
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
            {dataWithId.map((rowData, index) => (
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
    </>
  );
};

export default Csv;
