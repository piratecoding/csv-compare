import './Table.css'

export function Table({ columns, values } : { columns: string[], values: string[][] }) {
    
    return(
        <>
        <table className='table'>
            <thead>
              <tr>
                { columns.length > 0 && <th>Row number</th> }
                {columns.map((col: any, i: number) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {values.map((v: any, i: number) => (
                <tr key={i}>
                  <td>{i + 1}</td>
                  {v.map((value: any, j: number) => (
                    <td key={j}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
        </table>
        </>
    );
}