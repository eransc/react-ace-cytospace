import React from "react";

import "./App.css";

import CustomEditor from "./CustomEditor";
import CustomGraph from "./CustomGraph";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header text="Graph Editor"/>
      <div className="App">
        <CustomEditor />
        <CustomGraph />
      </div>
    </>
  );
}

export default App;
