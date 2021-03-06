import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  createContoh,
  updateContoh,
} from "../../../Config/Redux/Contoh/contoh.action";

import ContohDataService from "../../../Config/Services/Contoh/contoh.service";
import { compressImgB64 } from "../../../cores";

const DoCRUD = () => {
  const history = useHistory();
  const { id } = useParams();

  const initialContohState = {
    _id: null,
    judul: "",
    img: "",
  };

  const [currentContoh, setCurrentContoh] = useState(initialContohState);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const getContoh = (id) => {
    setIsLoading(true);

    ContohDataService.get(id)
      .then((response) => {
        setCurrentContoh(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getContoh(id);
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCurrentContoh({ ...currentContoh, [name]: value });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const name = e.target.name;
    const base64 = await compressImgB64(file);
    console.log(base64);
    setCurrentContoh({ ...currentContoh, [name]: base64 });
  };

  const updateContent = () => {
    setIsLoading(true);
    dispatch(updateContoh(currentContoh._id, currentContoh))
      .then((response) => {
        console.log(response);

        setMessage("The Contoh was updated successfully!");
        history.push("/contoh-crud");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const saveContent = () => {
    const { judul, img } = currentContoh;
    setIsLoading(true);

    dispatch(createContoh(judul, img))
      .then((data) => {
        setCurrentContoh({
          _id: data.id,
          judul: data.judul,
          img: data.img,
        });
        console.log(data);
        setMessage("The Contoh was create successfully!");
        history.push("/contoh-crud");
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {/* breadcrumb */}
      <div className="breadcrumb">
        <div className="bread-nav">home / {id ? "Edit CRUD" : "Add CRUD"}</div>
        <hr />
        <div className="title">{id ? "Edit CRUD" : "Add CRUD"}</div>
      </div>

      {/* Card */}
      <div className="wrap">
        {isLoading ? (
          <div className="load-content">
            <div className="loader-md" />
            Process ...
          </div>
        ) : null}

        {/* TITLE  */}
        <div className="title">Contoh {id ? "Edit" : "Add"} Redux CRUD</div>

        {/* FORM  */}
        <div className="wrap-form">
          {/* <div className="form-title">Sign Up for our Newsletter!</div> */}

          {/* BODY FORM  */}
          <div className="form-body">
            <div className="row">
              <input
                type="text"
                id="judul"
                name="judul"
                value={currentContoh.judul}
                onChange={handleInputChange}
                placeholder="Judul*"
              />
            </div>
            <div className="upload-group">
              <input
                id="img"
                name="img"
                type="file"
                onChange={handleFileUpload}
              />

              {currentContoh.img ? (
                <>
                  <label className="btn-change" htmlFor="img">
                    Change Image
                  </label>
                  <img
                    src={currentContoh.img}
                    id="preview"
                    alt="preview"
                    style={{
                      height: 200,
                      marginLeft: 15,
                      width: "fit-content",
                      backgroundColor: "blue",
                    }}
                  />
                </>
              ) : (
                <>
                  <label className="btn-choose" htmlFor="img">
                    Choose Image
                  </label>
                  <div
                    style={{
                      height: 200,
                      marginLeft: 15,
                      width: 300,
                      backgroundColor: "Highlight",
                    }}
                  />
                </>
              )}
            </div>
          </div>
          <p>{message}</p>
          <div className="rule"></div>

          {/* FOOTER FORM  */}
          <div className="form-footer">
            <button
              className="btn btn-danger mr-1"
              onClick={() => history.goBack()}
            >
              Cancel
            </button>
            {id ? (
              isLoading ? (
                <button
                  className="btn btn-disabled"
                  disabled
                  onClick={updateContent}
                >
                  <div className="btn-loader" /> Update
                </button>
              ) : (
                <button className="btn btn-success" onClick={updateContent}>
                  Update
                </button>
              )
            ) : isLoading ? (
              <button
                className="btn btn-disabled"
                disabled
                onClick={saveContent}
              >
                <div className="btn-loader" /> Save
              </button>
            ) : (
              <button className="btn btn-success" onClick={saveContent}>
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DoCRUD;
