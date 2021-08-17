import React from "react";
import "./contact.scss";
import useWindowDimensions from "../../sizeHook";

function Contact() {
  const { width } = useWindowDimensions();
  return (
    <main className="App-contact container-fluid">
      <div className="col-12 mx-auto">
        <h1 style={{ textAlign: "center" }}>Kontakta</h1>
        <div
          className="col-10 mx-auto"
          style={width > 900 ? { display: "flex" } : { display: "unset" }}
        >
          <div
            className={
              width > 900
                ? "col-5 mx-auto"
                : width > 600
                ? "col-8 mx-auto"
                : "col-12 mx-auto text-center"
            }
          >
            <h3 style={{ textAlign: "center" }}> Vill du kontakta Johan?</h3>
            <p>
              Telefon{" "}
              <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>📱</i>
            </p>
            <a className="borderBottom" href="tel:076-0100928">
              076-0100928
            </a>
            <p>
              Mail <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>✉️</i>
            </p>{" "}
            <a
              className="borderBottom"
              rel="noopener noreferrer"
              href="mailto:johan_79@live.se"
              target="_blank"
            >
              johan_79@live.se
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
