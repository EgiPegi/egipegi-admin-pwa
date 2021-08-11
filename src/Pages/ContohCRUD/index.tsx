import React from "react";
import { useHistory } from "react-router-dom";
import ListCRUD from "./ListCRUD";

const ContohCRUD = () => {
  const history = useHistory();
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / basic redux</div>
        <hr />
        <div className="title">Basic Redux</div>
      </div>
      <div className="wrap">
        <div className="title">Contoh Basic Redux CRUD</div>
        <button className="btn btn-success mb-1" onClick={()=> history.push("contoh-crud/do")}>Add</button>
        <ListCRUD />
      </div>
    </>
  );
};

export default ContohCRUD;
