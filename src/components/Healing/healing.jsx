import React from "react";
import "./healing.scss";
import useWindowDimensions from "../../sizeHook";

function Contact() {
  const { width } = useWindowDimensions();
  return (
    <main className="App-healing container-fluid">
      <div className="row">
        <div className="text-center">
          <h1>Vad är Healing?</h1>
          <div
            className="col-9 mx-auto"
            style={width > 1000 ? { display: "flex" } : { display: "unset" }}
          >
            <br></br>
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <h6>Kristallhealing</h6> 
              <p>
                Är en behandling som fördjupar sig i kropp och själ. Det är en
                healing där man använder sig utav stenar och kristaller för att
                rena och balansera chakran. Kristaller och stenar har visat sig
                ha en stark effekt på de energifält som omger vår kropp.
              </p>
              <h6>Transhealing</h6> 
              <p>
                Denna form av healing är en passiv process mellan healern och
                mottagaren, där healern överlämnar sig helt till sitt "spirit
                team". När jag utför transhealing "lånar" jag ut min kropp till
                min guide Matilda.
              </p>
            </div>
            <div className={width > 1000 ? "col-5 mx-auto" : "col-8 mx-auto"}>
              <h6>Distanshealing</h6> 
              <p>
                Distanshealing är att skicka kärleksfull energi till någon som
                är på en annan plats. Du tar emot den där du befinner dig. Denna
                form av healing kan vara bra i dessa tider vi lever i just nu.  
                  Energi finns runt om oss. Genom healing tillförs kroppen ny
                energi vilket hjälper individen till självläkning. Healing
                balanserar energi i kroppen och kan göra så att spänningar och
                blockeringar släpper. Healingen kan ses som att man boostar
                kroppen med  positiv energi  som gör att du  känner dig gladare
                och får mer kraft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
