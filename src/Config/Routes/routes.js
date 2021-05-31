import { lazy } from "react";

const Settings = lazy(() => import("../../Pages/Settings"));
const SettingsOne = lazy(() => import("../../Pages/Settings/PageOne"));
const Page404 = lazy(() => import("../../Pages/Page404"));
const Tables = lazy(() => import("../../Pages/Tables"));
const Dashboard = lazy(() => import("../../Pages/Dashboard"));

const routes = [
  {
    path: "dashboard/", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "table/", // the url
    component: Tables, // view rendered
  },
  {
    path: "settings/", // the url
    component: Settings, // view rendered
  },
  {
    path: "settings/satu", // the url
    component: SettingsOne, // view rendered
  },
  {
    path: "404", // the url
    component: Page404, // view rendered
  },
];
export default routes;
