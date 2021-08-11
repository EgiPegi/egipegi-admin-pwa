import { lazy } from "react";

const Dashboard = lazy(() => import("../../Pages/Dashboard"));
const Tables = lazy(() => import("../../Pages/Tables"));
const ModalPage = lazy(() => import("../../Pages/ModalPage"));
const Settings = lazy(() => import("../../Pages/Settings"));
const SettingsOne = lazy(() => import("../../Pages/Settings/PageOne"));
const ReduxBasic = lazy(() => import("../../Pages/ReduxBasic"));
const ContohCRUD = lazy(() => import("../../Pages/ContohCRUD"));
const DoCRUD = lazy(() => import("../../Pages/ContohCRUD/DoCRUD"));
const Page404 = lazy(() => import("../../Pages/Page404"));

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
    path: "modal/", // the url
    component: ModalPage, // view rendered
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
    path: "basic-redux", // the url
    component: ReduxBasic, // view rendered
  },
  {
    path: "contoh-crud", // the url
    component: ContohCRUD, // view rendered
  },
  {
    path: "contoh-crud/do", // the url
    component: DoCRUD, // view rendered
  },
  {
    path: "404", // the url
    component: Page404, // view rendered
  },
];
export default routes;
