import axios from "axios";
import React from "react";

var slow;

const getOnLineStatus = () =>
  typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
    ? navigator.onLine
    : true;

const DetectNetwork = () => {
  const [status, setStatus] = React.useState(getOnLineStatus());
  const [Reload, setReload] = React.useState(true);

  const setOnline = () => {
    setStatus(true);
  };
  const setOffline = () => {
    setStatus(false);
  };
  const setSlowCon = () => {
    slow = setTimeout(function () {
      localStorage.setItem("net-speed", "2");
      console.log("2")
    }, 2000);
  };
  const mathCon = () => {
    axios
      .get(
        "https://picsum.photos/640/480"
      )
      .then((res) => {
        if (res) {
          window.clearTimeout(slow);
          setTimeout(() => {
            localStorage.setItem("net-speed", "1");
            setReload(!Reload);
          }, 5000);
        }
      })
      .catch((err) => console.log(err));
  };

  React.useEffect(() => {
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);
    if (Reload) {
      setSlowCon();
    }
    mathCon();

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
    // eslint-disable-next-line
  }, [Reload]);

  return status;
};

export default DetectNetwork;
