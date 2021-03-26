import React from "react";
import "./contact.scss";
import useWindowDimensions from "../../sizeHook";

function Contact() {
  const { width } = useWindowDimensions();
  return (
    <main className="App-contact container-fluid">
      <div className="col-12 mx-auto">
        <h1 style={{ textAlign: "center" }}>Kontakta</h1>
        <p style={{ textAlign: "center", paddingBottom: "1rem" }}>
          Vill du kontakta Johan eller Marie?
        </p>
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
            <h3 style={{ textAlign: "center" }}>Johan</h3>
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
          <div
            className={
              width > 900
                ? "col-5 mx-auto"
                : width > 600
                ? "col-8 mx-auto"
                : "col-12 mx-auto text-center"
            }
          >
            <h3
              style={
                width > 900
                  ? { textAlign: "center" }
                  : { textAlign: "center", marginTop: "1.8rem" }
              }
            >
              Marie
            </h3>
            <p>
              Telefon{" "}
              <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>📱</i>
            </p>
            <a className="borderBottom" href="tel:073-0969011">
              073-0969011
            </a>
            <p>
              Mail <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>✉️</i>
            </p>
            <a
              className="borderBottom"
              rel="noopener noreferrer"
              href="mailto:marie.ramberg@outlook.com"
              target="_blank"
            >
              marie.ramberg@outlook.com
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
