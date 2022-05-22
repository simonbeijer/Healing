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
          className="col-12 mx-auto main-div"
          style={
            width > 900 ? { flexDirection: "row" } : { flexDirection: "column" }
          }
        >
          <div
            style={width > 900 ? { paddingRight: "1rem" } : {paddingBottom: "2rem"}}
            className={
              width > 900
                ? "col-4 mx-auto"
                : "col-12 mx-auto text-center"
            }
          >
            <h3 style={{ textAlign: "center" }}> Vill du kontakta Johan?</h3>
            <p style={width < 900 ? { textAlign: "center" } : {}}>
              Telefon{" "}
              <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>📱</i>
            </p>
            <a
              style={width < 900 ? { textAlign: "center" } : {}}
              className="borderBottom"
              href="tel:076-0100928"
            >
              076-0100928
            </a>
            <p style={width < 900 ? { textAlign: "center" } : {}}>
              Mail <i style={{ fontSize: "1.8rem", fontStyle: "normal" }}>✉️</i>
            </p>{" "}
            <a
              style={width < 900 ? { textAlign: "center" } : {}}
              className="borderBottom"
              rel="noopener noreferrer"
              href="mailto:johan_79@live.se"
              target="_blank"
            >
              johan_79@live.se
            </a>
          </div>
          <div className={
              width > 900
                ? "col-8 mx-auto"
                : "col-12 mx-auto"
            }>
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2128.2555261110247!2d14.133628315880673!3d57.763064281138426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465a720712268d0b%3A0x4d9f423a54775724!2sLovisagatan%2027%2C%20554%2072%20J%C3%B6nk%C3%B6ping!5e0!3m2!1ssv!2sse!4v1653230703286!5m2!1ssv!2sse"
              width="100%"
              height="450"
              style={{ border: 0, paddingLeft: "1rem"}}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="map"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
