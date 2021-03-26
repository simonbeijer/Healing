import React from "react";
import "./products.scss";
import useWindowDimensions from "../../sizeHook";

function Products() {
  const { width } = useWindowDimensions();

  return (
    <main className="App-products container-fluid">
      <div className="row">
        <div className="col-10 mx-auto">
          <h1 style={{ textAlign: "center" }}>Tjänster och Priser</h1>
          <div
            className={width < 1110 ? "col-10 mx-auto" : "col-12 mx-auto"}
            style={width > 1000 ? { display: "flex" } : { display: "unset" }}
          >
            <div
              className={
                width > 1000
                  ? "col-6 mx-auto"
                  : width < 600
                  ? "col-12 mx-auto"
                  : "col-10 mx-auto"
              }
            >
              <table style={{ fontSize: "120%", minWidth: "100%" }}>
                <tbody>
                  <tr>
                    <th className="topMargin">Johan</th>
                  </tr>
                  <tr>
                    <th>Tjänst</th>
                    <th>Pris</th>
                  </tr>
                  <tr>
                    <td>Vägledning via telefon</td>
                    <td>500 kr</td>
                  </tr>
                  <tr>
                    <td>Healing på distans</td>
                    <td>300 kr</td>
                  </tr>
                  <tr>
                    <td>Rensning av energier i hus</td>
                    <td>950 kr</td>
                  </tr>
                  <tr>
                    <th className="topMargin">Gemensammt</th>
                  </tr>
                  <tr>
                    <th>Tjänst</th>
                    <th>Pris</th>
                  </tr>
                  <tr>
                    <td>Trumhealing</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Trumresor</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Vägledda meditationer</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Storseanser</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Husrensning stor</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Retreater</td>
                    <td>Kontakta</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              className={
                width > 1000
                  ? "col-6 mx-auto"
                  : width < 600
                  ? "col-12 mx-auto"
                  : "col-10 mx-auto"
              }
            >
              <table style={{ fontSize: "120%", minWidth: "100%" }}>
                <tbody>
                  <tr>
                    <th className="topMargin">Marie</th>
                  </tr>
                  <tr>
                    <th>Tjänst</th>
                    <th>Pris</th>
                  </tr>
                  <tr>
                    <td>Transhealing via telefon</td>
                    <td>300 kr</td>
                  </tr>
                  <tr>
                    <td>Hembesök</td>
                    <td>850 kr</td>
                  </tr>
                  <tr>
                    <td>Medial Coaching via telefon</td>
                    <td>300 kr</td>
                  </tr>
                  <tr>
                    <td>Medial Coaching hembesök</td>
                    <td>850 kr</td>
                  </tr>
                  <tr>
                    <td>Transmedium via telefon</td>
                    <td>300 kr</td>
                  </tr>
                  <tr>
                    <td>Transmedium hembesök</td>
                    <td>850 kr</td>
                  </tr>
                  <tr>
                    <td>Husrensning</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Djurkommunikation ett djur</td>
                    <td>850 kr</td>
                  </tr>
                  <tr>
                    <td>Djurkommunikation fler djur</td>
                    <td>Kontakta</td>
                  </tr>
                  <tr>
                    <td>Sittning med tarot & pendel via telefon</td>
                    <td>650 kr</td>
                  </tr>
                  <tr>
                    <td>Sittning med tarot & pendel hembesök</td>
                    <td>850 kr</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <p style={{ paddingTop: 46 }}>
            Vid hembesök kan reseersättning erfordras, fråga gärna vid bokning.
          </p> */}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
