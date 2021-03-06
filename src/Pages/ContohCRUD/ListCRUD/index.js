import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import DataTable from "../../../components/DataTable";
import {
  deleteAllContoh,
  deleteContoh,
  findContohByTitle,
  retrieveContoh,
} from "../../../Config/Redux/Contoh/contoh.action";

const ListCRUD = () => {
  const history = useHistory();
  const [currentContoh, setCurrentContoh] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const contoh = useSelector((state) => state.contoh);
  const dispatch = useDispatch();

  for (const key in contoh) {
    let no = parseInt(key) + 1;
    contoh[key]["no"] = no;
  }

  useEffect(() => {
    setIsLoading(true);
    dispatch(retrieveContoh())
      .then((res) => {
        setIsLoading(false);
      })
      .catch((err) => setIsLoading(false));
  }, [dispatch]);

  const refreshData = () => {
    setCurrentContoh(null);
  };

  const removeAllContoh = () => {
    dispatch(deleteAllContoh())
      .then((response) => {
        console.log(response);
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByTitle = (e) => {
    setIsLoading(true);
    refreshData();
    const searchTitle = e.target.value;
    dispatch(findContohByTitle(searchTitle))
      .then((r) => setIsLoading(false))
      .catch((e) => setIsLoading(false));
  };

  const selectContoh = (contoh) => {
    setCurrentContoh(contoh);
  };
  const deleteOne = () => {
    dispatch(deleteContoh(currentContoh._id))
      .then(() => {
        console.log("terhapus");
        dispatch(retrieveContoh());
        refreshData();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const columns = [
    {
      name: "no",
      selector: "no",
      width: "30px",
    },
    {
      name: "Judul",
      selector: "judul",
    },
    {
      name: "Dibuat",
      selector: "createdAt",
    },
    {
      name: "Update",
      selector: "updatedAt",
    },
    {
      name: "Action",
      selector: "action",
      width: "50px",
      action: (row) => (
        <div
          onClick={() => selectContoh(row)}
          style={{
            cursor: "pointer",
            backgroundColor: "mediumseagreen",
            color: "white",
            padding: 4,
            borderRadius: 4,
          }}
        >
          details
        </div>
      ),
    },
  ];

  return (
    <div style={{ display: "flex", position: "relative" }}>
      <input
        type="text"
        placeholder="Search by judul"
        onChange={(e) => findByTitle(e)}
        style={{
          position: "absolute",
          top: -40,
          right: 510,
          padding: 10,
          borderRadius: 8,
        }}
      />
      <div style={{ flex: 1 }}>
        <DataTable
          loading={isLoading}
          columns={columns}
          data={contoh}
          pagination={true}
        />
      </div>
      <div className="ml-1">
        {currentContoh ? (
          <div style={{ width: 500 }}>
            <div className="mb-2 title">Detail Contoh</div>
            <div>
              <label>
                <strong className="mr-1">Judul:</strong>
              </label>{" "}
              {currentContoh.judul}
            </div>
            <div>
              <img
                src={currentContoh.img}
                alt={currentContoh.judul}
                style={{ maxHeight: 220 }}
              />
            </div>
            <div className="mt-2" />
            <button
              onClick={() =>
                history.push(`contoh-crud/do/${currentContoh._id}`)
              }
              // to={"/do/" + currentContoh._id}
              className="btn btn-warn  mr-1"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (
                  window.confirm("Hapus Contoh " + currentContoh.judul + " ?")
                ) {
                  deleteOne();
                }
              }}
              to="#"
              className="btn btn-danger mr-1"
            >
              Delete
            </button>
            <button
              onClick={() => {
                if (window.confirm("Hapus Semua Contoh ?")) {
                  removeAllContoh();
                }
              }}
              className="btn"
            >
              Delete All
            </button>
          </div>
        ) : (
          <div style={{ width: 500 }}>
            <div className="mb-5 title">Detail Contoh</div>
            <br />
            <p>Please click details on contoh CRUD list...</p>
          </div>
        )}
      </div>
    </div>
  );
};
export default ListCRUD;
