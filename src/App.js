import React from "react";
import Background from "./components/Background";
import logo from "./assets/img/logo.blockchain.png";

function App() {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <header className="header">
          <div className="logo-wrapper">
            <img className="logo" src={logo} alt="blockchain" />
          </div>
        </header>
      </div>
      <Background />
    </div>
  );
}

export default App;
