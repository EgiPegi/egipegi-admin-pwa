import React, { Suspense } from "react";
import "./Assets/CSS/style.scss";
import "./Assets/CSS/table.scss";
import "./Assets/CSS/form.scss";
import "./Assets/Icons/css/uicons-bold-straight.css"
import LoadingSus from "./components/LoadingSus";
import Routes from "./Config/Routes";

function App() {
  return (
    <Suspense fallback={<LoadingSus />}>
      <Routes />
    </Suspense>
  );
}

export default App;
