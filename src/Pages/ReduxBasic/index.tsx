import React from "react";
import Counter from "./Counter";
import CounterPersist from "./CounterPersist";

const index = () => {
  return (
    <>
      <div className="breadcrumb">
        <div className="bread-nav">home / basic redux</div>
        <hr />
        <div className="title">Basic Redux</div>
      </div>
      <div className="wrap">
        <div className="title">Contoh Basic Redux Count</div>
        <Counter />
      </div>
      <div className="wrap">
        <div className="title">Contoh Basic Redux Persisted Count</div>
        <CounterPersist />
      </div>
    </>
  );
};

export default index;
