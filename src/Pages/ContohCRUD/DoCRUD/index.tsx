import React from "react";
import { useHistory } from "react-router-dom";

const DoCRUD = () => {
  const history = useHistory();
  return (
    <>
      {/* breadcrumb */}
      <div className="breadcrumb">
        <div className="bread-nav">home / basic redux</div>
        <hr />
        <div className="title">Add CRUD</div>
      </div>

      {/* Card */}
      <div className="wrap">
        {/* TITLE  */}
        <div className="title">Contoh ADD Redux CRUD</div>

        {/* FORM  */}
        <div className="wrap-form">
            {/* <div className="form-title">Sign Up for our Newsletter!</div> */}

            {/* BODY FORM  */}
            <div className="form-body">
              <div className="row">
                <input type="text" placeholder="Judul*" />
              </div>
              <div className="upload-group">
                <label className="btn-choose" htmlFor="img">Choose Image</label>
                {/* <label className="btn-change">Choose Image</label> */}
                <input id="img" type="file" />
              </div>
            </div>
            <div className="rule"></div>

            {/* FOOTER FORM  */}
            <div className="form-footer">
              <button
                className="btn btn-danger mr-1"
                onClick={() => history.goBack()}
              >
                Cancel
              </button>
              <button className="btn btn-success">Submit</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default DoCRUD;
