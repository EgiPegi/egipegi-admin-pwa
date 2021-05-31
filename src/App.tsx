import React, { Suspense } from "react";
import "./App.scss";
import "./Assets/CSS/style.scss";
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
