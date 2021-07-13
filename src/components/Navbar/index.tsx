import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Navitem } from "./navitem";

const Navbar = () => {
  const [NavHide, setNavHide] = useState<boolean>(false);
  const [NavState, setNavState] = useState<string>(
    localStorage.getItem("nav-state")!
  );
  useEffect(() => {
    const root = document.documentElement;
    root?.style.setProperty("--nav-width", NavHide ? "56px" : "250px");
    root?.style.setProperty("--icon-size", NavHide ? "28px" : "18px");
  }, [NavHide]);
  return (
    <div className="navbar">
      <div className="nav-head">
        {NavHide ? null : <div className="nav-head-text">EgiPegi Admin</div>}
        <div className="nav-head-logo" onClick={() => setNavHide(!NavHide)}>
          <i className="fi fi-bs-menu-burger" style={{ fontSize: 26 }}></i>
        </div>
      </div>
      <div className="nav-main">
        {Navitem.map((r: any) => {
          return (
            <div key={r.name}>
              {!r.routes ? (
                <NavLink
                  to={r.path}
                  activeClassName="nav-item--active"
                  className="nav-item"
                >
                  <div
                    className="nav-item"
                    onClick={() => {
                      localStorage.setItem("nav-state", "");
                      setNavState("");
                    }}
                  >
                    <i className={`fi ${r.icon} nav-icon`}></i>{" "}
                    {NavHide ? null : (
                      <span className="nav-name">{r.name}</span>
                    )}
                  </div>
                </NavLink>
              ) : (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    className="nav-item"
                    onClick={() => {
                      if (NavState === r.name) {
                        localStorage.setItem("nav-state", "");
                        setNavState("");
                      } else {
                        localStorage.setItem("nav-state", r.name);
                        setNavState(r.name);
                      }
                    }}
                  >
                    <i className={`fi ${r.icon} nav-icon`}></i>{" "}
                    {NavHide ? null : (
                      <span className="nav-name">{r.name}</span>
                    )}
                  </div>
                  <div>
                    {NavState === r.name
                      ? r.routes.map((rc: any) => {
                          return (
                            <div key={rc.name}>
                              <NavLink
                                to={rc.path}
                                activeClassName="subnav-item--active"
                                className="subnav-item"
                              >
                                <i className={`fi ${rc.icon} nav-icon`}></i>{" "}
                                {NavHide ? null : (
                                  <span className="subnav-name">{rc.name}</span>
                                )}
                              </NavLink>
                            </div>
                          );
                        })
                      : null}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
