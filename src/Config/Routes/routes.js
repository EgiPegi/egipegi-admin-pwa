import { lazy } from "react";

const Page404 = lazy(() => import("../../Pages/Page404"));
const Dashboard = lazy(() => import("../../Pages/Dashboard"));

const routes = [
  {
    path: "dashboard/", // the url
    component: Dashboard, // view rendered
  },
  {
    path: "404", // the url
    component: Page404, // view rendered
  },
];
export default routes;
