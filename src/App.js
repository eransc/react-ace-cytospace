import React from "react";

import "./App.css";

import CustomEditor from "./CustomEditor";
import CustomGraph from "./CustomGraph";
import Header from "./Header";

function App() {
  return (
    <>
      <Header />
      <div className="App">
        <CustomEditor />
        <CustomGraph />
      </div>
    </>
  );
}

export default App;
