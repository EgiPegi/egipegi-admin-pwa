import React, { useEffect, useState } from "react";

const DataTable = (data: any) => {
  const [dataTable, setdataTable] = useState<any>([{}]);
  useEffect(() => {
    console.log(data.data)
    setdataTable(data.data);
  }, [data]);

  return (
    <>
      <table id="custum_table">
        <tr>
          {dataTable.map((row: any) => {
            return <th>{row.name}</th>
          })}
        </tr>
        <tr>
          {dataTable.map((row: any) => {
            return <td>{row.selector}</td>
          })}
        </tr>
      </table>
    </>
  );
};

export default DataTable;
