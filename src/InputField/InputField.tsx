import Papa from "papaparse";
import { useState } from "react";

export function InputField({ onFileUpload } : {onFileUpload: any}) {   
    const [tableToUpload, setTableToUpload] = useState(1);

    const handleFileUpload = (event: any) => {      
        Papa.parse(event.target.files[0], {
            header: true,
            skipEmptyLines: true,
            complete: function (result: any) {
                const columnsArray: any = [];
                const valuesArray: any = [];

                result.data.map((elem: any) => {
                    columnsArray.push(Object.keys(elem));
                    valuesArray.push(Object.values(elem));
                });

                tableToUpload === 1 ? setTableToUpload(2) : setTableToUpload(1);
                onFileUpload([columnsArray[0], valuesArray]);
            }
        });
    }

    let order: string = tableToUpload === 1 ? "first" : "second";

    return (
        <div style={{display: "inline-flex"}}>
            <p>Table to upload: {tableToUpload}   </p>
            <p style={{marginRight: "10px"}}>Upload your <b>{order}</b> CSV file</p>
            <input 
              type="file" 
              name='file'
              accept='.csv'
              onChange={handleFileUpload}
              style={{margin:" 16px auto"}}
            />
      </div>
    )
}