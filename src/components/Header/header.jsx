import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import logo from "../../assets/heart.png";
// import logo from "../../assets/lotus.png";

function Home() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => setExpanded(!expanded);
  const show = expanded ? "show" : " ";

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top gradientBlue">
      <Link className="navbar-brand" to="/">
        <img
          style={{ paddingLeft: 16 }}
          src={logo}
          alt="mli-logo"
          className="logo"
        />
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
            <Link onClick={toggleExpand} className="nav-link" to="contact">
              KONTAKTA
            </Link>
          </li>
          <li className="nav-item">
            <Link onClick={toggleExpand} className="nav-link" to="about">
              OM OSS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Home;
