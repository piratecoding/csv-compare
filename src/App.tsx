import { useState } from 'react';
import './App.css';
import { Table } from './Table';
import { InputField } from './InputField';

function App() {
  const [tableData, setTableData] = useState<{ columns: string[]; data: string[][] }[]>([
    { columns: [], data: [] },
    { columns: [], data: [] },
  ]);
  const [toUpdateTable, setToUpdate] = useState<number>(0);

  const handleFileUpload = (data: any) => {
    const updatedTableData = [...tableData];
    const currentTable = updatedTableData[toUpdateTable];
    currentTable.columns = data[0];
    currentTable.data = data[1];
    setTableData(updatedTableData);

    setToUpdate(1 - toUpdateTable); // Toggle between 0 and 1
  }

  return (
    <>      
      <div>
        <h1 style={{textAlign: "center"}}>CSV comparison tool</h1>
      </div>
      <br />
      <InputField onFileUpload={handleFileUpload}/>
      <br />
      <div style={{display: "flex"}}>
        {tableData[0].columns.length > 0 && tableData.map((table, index) => (
          <div key={index} className='table-div'>
            <p>Table {index + 1}</p>
            <Table columns={table.columns} values={table.data} />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
