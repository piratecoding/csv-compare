import { useState } from 'react';
import './App.css';
import { Table } from './Table/Table';
import { InputField } from './InputField/InputField';

function App() {
  const [columnsArray, setColumn] = useState<string[]>([]);
  const [valuesArray, setValues] = useState<string[][]>([]);

    const handleFileUpload = (data: any) => {
      setValues(data[1]);
      setColumn(data[0]);
    }

  return (
    <>      
      <div>
        <h1 style={{textAlign: "center"}}>CSV comparison tool</h1>
      </div>

      <InputField onFileUpload={handleFileUpload} />

      <br />

      <div style={{display: "flex"}}>
        <div style={{padding: "10px"}}>
          <Table columns={columnsArray} values={valuesArray}/>
        </div>
        
        {/* <div style={{padding: "10px"}}>
          <Table columns={columnyArray} values={values}/>
        </div> */}
      </div>
    </>
  );
}

export default App;
