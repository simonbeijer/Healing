import React from "react";
import "./sidelogo.scss";
import logo from "../../assets/logo.JPG";

function SideLogo() {
  return (
    <img
      className="sideLogo"
      style={{ width: "15%" }}
      src={logo}
      alt="Välkommen till ett andligt center i Jönköping"
    />
  );
}

export default SideLogo;
