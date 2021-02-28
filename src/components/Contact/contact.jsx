import React from "react";
import "./contact.scss";

function Contact() {
  return (
    <main className="App-contact container-fluid">
      <div className="row">
        <div className="text-center">
          <div className="col-8 mx-auto">
            <h1>Kontakta</h1>
            <div className="col-3 mx-auto"></div>
            <p>Vill du kontakta Johan eller Marie?</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div>
                <h3>Johan</h3>
                <p>Tele: 076-0100928</p>
                <p>Mail: johan_79@live.se</p>
              </div>
              <div>
                <h3>Marie</h3>
                <p>Tele: 073-0969011</p>
                <p>Mail: marie.ramberg@outlook.com</p>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae optio eveniet facilis error reiciendis quas molestias
              culpa aliquid quo tenetur, dolore, quis itaque eius ratione ea
              iusto omnis fugiat recusandae.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
