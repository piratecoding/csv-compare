import Papa from "papaparse";

export function InputField({ onFileUpload } : {onFileUpload: any}) {   

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

                onFileUpload([columnsArray[0], valuesArray]);
            }
        })
    }

    return (
        <div style={{display: "inline-flex"}}>
        <p style={{marginRight: "10px"}}>Upload your CSV file</p>
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