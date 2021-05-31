import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [NavHide, setNavHide] = useState(false);
  useEffect(() => {
    // console.log(NavHide);
    const root = document.documentElement;
    root?.style.setProperty("--nav-width", NavHide ? "70px" : "250px");
    // root?.style.setProperty("--text-color", NavHide ? "#fff" : "#262833");
  }, [NavHide]);
  return (
    <div className="navbar">
      <div className="nav-head">
        {NavHide ? null : <div className="nav-head-text">text</div>}
        <div className="nav-head-logo" onClick={() => setNavHide(!NavHide)}>logo</div>
      </div>
      <div className="nav-main">
      
      </div>
    </div>
  );
};

export default Navbar;
