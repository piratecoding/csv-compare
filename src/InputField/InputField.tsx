import Papa from "papaparse";
import { useState } from "react";
import { Loading } from "../Loading";

// const worker = new Worker(".././Worker.ts");
// const worker2 = new Worker(".././wrk.ts")

export function InputField({ onFileUpload } : {onFileUpload: any}) {  
    // worker.postMessage("start");
    // worker.onmessage = ev => console.log(ev.data) 
    const [tableToUpload, setTableToUpload] = useState(1);
    const [isLoading, setLoading] = useState(false);

    const handleFileUpload = (event: any) => {  
        setLoading(true);   
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
                setLoading(false)
            }
        });
    }

    let order: string = tableToUpload === 1 ? "first" : "second";

    return (
        <div style={{display: "inline-flex"}}>
            <p style={{marginRight: "10px"}}>Upload your <b>{order}</b> CSV file</p>
            <input 
              type="file" 
              name='file'
              accept='.csv'
              onChange={handleFileUpload}
              style={{margin:" 16px auto"}}
            />
            {isLoading ? <Loading/> : null}
            <Loading/>
      </div>
    )
}