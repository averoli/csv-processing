import { useState } from "react";
import "./App.css";
import Papa from "papaparse";
import Csv from "./csv/Csv";
import EditModal from "./editModal/EditModal";

function App() {
  const [csvData, setCsvData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (results) => {
        setCsvData(
          results.data.map((element, index) => ({
            id_react: index + 1,
            ...element,
          }))
        );
      },
    });
  };

  const handleAddRow = () => {
    setIsEditing(true);
    setSelectedRow({});
  };

  const deleteRow = (id) => {
    setCsvData(csvData.filter((item) => item.id_react !== id));
  };

  const editRow = (rowData) => {
    setSelectedRow(rowData);
    setIsEditing(true);
  };

  const handleSave = (rowData) => {
    if (rowData.id_react) {
      // If row has an id, update existing row
      const updatedData = csvData.map((item) =>
        item.id_react === rowData.id_react ? rowData : item
      );
      setCsvData(updatedData);
    } else {
      // If row doesn't have an id, add new row
      setCsvData([...csvData, { ...rowData, id_react: csvData.length + 1 }]);
    }
    setIsEditing(false);
  };

  return (
    <div className="App">
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <input type="file" accept=".csv" onChange={handleFileUpload} />
      <Csv
        csvData={csvData}
        handleAddRow={handleAddRow}
        editRow={editRow}
        deleteRow={deleteRow}
      />
      {/* <button onClick={handleExportCsv}>Export CSV</button> */}
      {isEditing && (
        <EditModal
          isEditing={isEditing}
          rowData={selectedRow}
          handleSave={handleSave}
          handleModalClose={() => setIsEditing(false)}
        />
      )}
    </div>
  );
}

export default App;
