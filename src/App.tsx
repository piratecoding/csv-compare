import React, { useState } from 'react';
import './App.css';
import Papa from 'papaparse';

function App() {

  const [data, setData] = useState([]);
  const [columnyArray, setColumn] = useState<string[]>([]);
  const [values, setValues] = useState<string[][]>([]);
  

  const handleFile = (event: any) => {
    Papa.parse(event.target.files[0], {
      header: true,
      skipEmptyLines: true,
      complete: function(result: any) {
        const columnyArray: any = [];
        const valuesArray: any = [];

        result.data.map((elem: any)  => {
          columnyArray.push(Object.keys(elem));
          valuesArray.push(Object.values(elem));
        });

        setData(result.data);
        setColumn(columnyArray[0]);
        setValues(valuesArray);
      }
    })
  }


  return (
    <>
      <div>
        <h1 style={{textAlign: "center"}}>CSV comparison tool</h1>
      </div>

      <div style={{display: "inline-flex"}}>
        <p style={{marginRight: "10px"}}>Upload your CSV file</p>
        <input 
          type="file" 
          name='file'
          accept='.csv'
          onChange={handleFile}
          style={{margin:" 16px auto"}}
        />
      </div>

      <br />

      <table style={{borderCollapse: "collapse", border: "1px solid black", margin: "5px auto"}}>
        <thead>
          <tr>
            {columnyArray.map((col, i) => (
              <th style={{border: "1px solid"}} key={i}>{col}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {values.map((v, i) => (
            <tr key={i}>
              {v.map((value, j) => (
                <td style={{border: "1px solid"}} key={j}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
