import React from "react";

import "./App.css";

import CustomEditor from "./components/CustomEditor/CustomEditor";
import CustomGraph from "./components/CustomGraph/CustomGraph";
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
