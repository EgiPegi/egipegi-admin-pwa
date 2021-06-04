import React from "react";
import DataTable from "../../components/DataTable";

const dataTable = [
  {
    name: "Dataset 1",
    selector: "Isi data",
  },
  {
    name: "Dataset 2",
    selector: "Isi data 2",
  },
];
const Tables = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / tables</div>
        <hr />
        <div className="title">Table</div>
      </div>
      <div className="wrap">
        <div className="title">Table Title</div>
        <DataTable data={dataTable} />
      </div>
    </>
  );
};

export default Tables;
