import React from "react";
import "./sidelogo.scss";
import sidelogo from "../../assets/SJÄLSHARMONI_EMBLEM@4x.png";

function SideLogo() {
  return (
    <img
      className="sideLogo"
      style={{ width: "15%" }}
      src={sidelogo}
      alt="Välkommen till ett andligt center i Jönköping"
    />
  );
}

export default SideLogo;
