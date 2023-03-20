import React from "react";
import TableRow from "../tableRow/TableRow";
import "./style.css";

const Csv = ({ csvData, addRow }) => {
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
                  <button onClick={addRow}>Button</button>
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {csvData.map((rowData, index) => (
              <TableRow rowData={rowData} key={index}/>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Csv;
