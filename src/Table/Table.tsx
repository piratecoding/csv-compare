export function Table({ columns, values } : { columns: string[], values: string[][] }) {

    return(
        <>
        <table style={{borderCollapse: "collapse", border: "1px solid black", margin: "5px auto"}}>
            <thead>
              <tr>
                {columns.map((col: any, i: number) => (
                  <th style={{border: "1px solid"}} key={i}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {values.map((v: any, i: number) => (
                <tr key={i}>
                  {v.map((value: any, j: number) => (
                    <td style={{border: "1px solid"}} key={j}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
        </table>
        </>
    );
}