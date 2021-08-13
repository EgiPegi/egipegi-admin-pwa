import React, { lazy, Suspense, useEffect } from "react";
import { Redirect, Switch, Route } from "react-router";

import routes from "../Config/Routes/routes";

import LoadingSus from "../components/LoadingSus";
import Main from "./Main";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { eventBus } from "../cores";
import { logout } from "../Config/Redux/Auth/auth.action";

const Page404 = lazy(() => import("../Pages/Page404"));

const Layout = () => {
  const isLogin = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    eventBus.on("logout", () => dispatch(logout()));
    return () => {
      eventBus.remove("logout");
    };
  }, [dispatch]);

  return (
    <div className="layout">
      <div className="lay-side">
        <Navbar />
      </div>
      <div className="lay-main">
        <Header lgOt={logOut} />
        <Main>
          <Suspense fallback={<LoadingSus />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : null;
              })}
              <Redirect exact from="/" to="/dashboard/" />
              <Route component={Page404} />
            </Switch>
            {!isLogin && <Redirect exact from="/dashboard" to="/login" />}
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
