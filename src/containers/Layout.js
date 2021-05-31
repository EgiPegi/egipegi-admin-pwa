import React, { lazy, Suspense } from "react";
import { Redirect, Switch, Route } from "react-router";

import routes from "../Config/Routes/routes";

import LoadingSus from "../components/LoadingSus";
import Main from "./Main";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const Page404 = lazy(() => import("../Pages/Page404"));

const Layout = () => {
  return (
    <div className="layout">
      <div className="lay-side">
        <Navbar />
      </div>
      <div className="lay-main">
        <Header />
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
          </Suspense>
        </Main>
      </div>
    </div>
  );
};

export default Layout;
