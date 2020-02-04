import React from "react";
import Background from "./components/Background";
import Favorite from "@material-ui/icons/Favorite";

function App() {
  return (
    <div className="page-wrapper">
      <Background />
      <div className="page-content ">Test</div>
      <Favorite />
    </div>
  );
}

export default App;
