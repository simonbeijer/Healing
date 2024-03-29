import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <footer className="App-footer gradientRed footer">
      <div className="container-fluid">
        <div className="row">
          <div className="footerCols col-xs-12 col-sm-4 ">
            <a
              rel="noopener noreferrer"
              href="https://www.google.se"
              target="_blank"
            >
              <i className="fa fa-facebook-square"></i> Facebook
            </a>
          </div>
          <div className="footerCols col-xs-12 col-sm-4">
            <a
              rel="noopener noreferrer"
              href="https://www.google.se"
              target="_blank"
            >
              <i className="fa fa-instagram"></i> Instagram
            </a>
          </div>
          <div className="footerCols col-xs-12 col-sm-4">
            <a
              rel="noopener noreferrer"
              href="mailto:johan_79@live.se"
              target="_blank"
            >
              <i className="fa fa-envelope"></i> Mail till Johan
            </a>
          </div>
        </div>
      </div>

      <div className="copy d-flex align-items-center justify-content-center">
        <h6>Själsfönster &copy;</h6>
      </div>
    </footer>
  );
}

export default Footer;
