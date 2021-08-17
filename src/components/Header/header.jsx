import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import newLogo from "../../assets/newlogo.png";

function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const show = expanded ? "show" : " ";

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top gradientGreen">
      <Link className="navbar-brand" to="/">
        <div
          style={{ paddingLeft: 16 }}
          
          className="logo"
          >
          <p style={{  color: "#99b9c0",
 
                fontFamily: "Kumar One , cursive",
              fontWeight: "600",
              textShadow: "2px 2px #0000001a"}}>Själens fönster</p>
        </div>
      </Link>
      <button className="navbar-toggler" type="button" onClick={toggleExpand}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse  " + show}>
        <ul className="navbar-nav ml-auto ">
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="/">
              HEM
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="products">
              TJÄNSTER
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="healing">
              HEALING
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="about">
              OM MIG
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="contact">
              KONTAKTA
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
