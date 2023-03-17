import React, { useState } from "react";
import TableHeaderData from "../TableHeaderData";
import "./style.css";
import { GrFormAdd } from "react-icons/gr";
import TableBodyRow from "../TableBodyRow";

const Csv = ({data}) => {

  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const csvFileToArray = (string) => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map((i) => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });
    setArray(array);
  };


  const headerKeys = Object.keys(Object.assign({}, ...data));

  return (
    <div style={{ textAlign: "center" }}>
      <br />
      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((headerKey) => (
              <TableHeaderData headerKey={headerKey} />
            ))}
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val, index) => (
                <td>{val}</td>
                // <TableBodyRow key={index} val={val}/>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Csv;
