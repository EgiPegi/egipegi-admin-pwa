import React from "react";
import { DetectNetwork } from "../../cores";

const Header = ({ lgOt }: any) => {
  const [StatusCon, setStatusCon] = React.useState<any>(
    localStorage.getItem("net-speed")
  );
  const isOnline = DetectNetwork();

  React.useEffect(() => {
    console.log(StatusCon);
    if (!isOnline) {
      setStatusCon("0");
    } else {
      if (StatusCon === "2") {
        setStatusCon(localStorage.getItem("net-speed"));
      } else if (StatusCon === "1") {
        setStatusCon(localStorage.getItem("net-speed"));
      }
    }
  }, [isOnline, StatusCon]);
  return (
    <div className="header">
      <button onClick={()=>lgOt()}>Logout</button>
      <div style={{ color: "white", margin: 15 }}>
        {StatusCon === "0"
          ? "Offline"
          : StatusCon === "1"
          ? "Online"
          : "Slow Connection"}
      </div>
    </div>
  );
};

export default Header;
