import { useState } from "react";
import "./App.css";
import Papa from "papaparse";
import Csv from "./csv/Csv";
import TableHeaderData from "./TableHeaderData";

function App() {
  const [csvData, setCsvData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setCsvData(results.data);
      },
    });
  };
  const headerKeys = Object.keys(Object.assign({}, ...csvData));
  const addRow = () => {
    alert("New row")
  }
  // const handleExportCsv = () => {
  //   const csv = Papa.unparse(csvData);
  //   const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.setAttribute('href', url);
  //   link.setAttribute('download', 'data.csv');
  //   link.style.display = 'none';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className="App">
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>

      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <table>
        <TableHeaderData headerData={headerKeys} add={addRow}/>
      </table>
      {/* <Csv data={csvData} /> */}
      {/* <button onClick={handleExportCsv}>Export CSV</button> */}
    </div>
  );
}

export default App;
