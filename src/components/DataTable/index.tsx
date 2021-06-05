import { useEffect, useState } from "react";

const DataTable = (props: any) => {
  const { columns, data, pagination } = props;
  const [PerPage, setPerPage] = useState<number>(5);
  const [dataTable, setdataTable] = useState([]);
  const [Page, setPage] = useState<number>(1);
  const [PageNumber, setPageNumber] = useState<any>([]);

  useEffect(() => {
    const slicePage = Page - 1;
    const firstData = PerPage * slicePage;
    const endPage = PerPage * Page;
    const tmp: any = [];
    for (let index = 0; index < data.length; index++) {
      if (PerPage * index <= data.length) {
        tmp.push(index + 1);
      }
    }
    if (PerPage > 15) {
      if (Page >= PerPage / 10) {
        setPageNumber(tmp.slice(Page - PerPage / 10, Page + 2));
      } else {
        setPageNumber(tmp.slice(Page - Page, 5));
      }
    } else {
      if (Page >= PerPage / 2) {
        setPageNumber(tmp.slice(Page - PerPage / 2, Page + 2));
      } else {
        setPageNumber(tmp.slice(Page - Page, 5));
      }
    }
    setdataTable(data.slice(firstData, endPage));
  }, [PerPage, data, Page]);

  const changePage = (e: any) => {
    setPage(parseInt(e.target.value));
  };

  return (
    <div className="table_component">
      <table id="custum_table">
        <thead>
          <tr>
            {columns.map((row: any) => {
              return <th key={row.name}>{row.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {dataTable.map((col: any, i: number) => {
            return (
              <tr key={i}>
                {columns.map((row: any, key: number) => {
                  if (row.action) {
                    return (
                      <td key={key} width={row.width}>
                        {row.action(col)}
                      </td>
                    );
                  } else {
                    return (
                      <td key={key} width={row.width}>
                        {col[row.selector]}
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {!pagination ? null : (
        <div className="pagination">
          {data.length} /{" "}
          <select
            onChange={(e: any) => {
              setPerPage(parseInt(e.target.value));
              setPage(1);
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={data.length}>full</option>
          </select>
          <li onClick={() => setPage(1)}>&laquo;</li>
          {PageNumber.map((pg: any) => (
            <li
              value={pg}
              key={pg}
              className={Page === pg ? "active" : ""}
              onClick={changePage}
            >
              {pg}
            </li>
          ))}
          <li onClick={() => setPage(Math.ceil(data.length / PerPage))}>
            &raquo;
          </li>
        </div>
      )}
    </div>
  );
};

export default DataTable;
