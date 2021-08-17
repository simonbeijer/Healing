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
                  : width < 400
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
                    <td>Medial vägledning via telefon</td>
                    <td>500 kr</td>
                  </tr>
                  <tr>
                    <td>Rensning av energier i hus</td>
                    <td>950 kr</td>
                  </tr>
                  <tr>
                    <td>Healing på distans</td>
                    <td>500 kr</td>
                  </tr>
                  <tr>
                    <td>Andlighealing</td>
                    <td>500 kr</td>
                  </tr>
                  <tr>
                    <td>Kristallhealing</td>
                    <td>500 kr</td>
                  </tr>
                  <tr>
                    <td>Transhealing</td>
                    <td>500 kr</td>
                  </tr>
                  <tr style={{ fontStyle: "italic" }}>
                    I väntan på ny lokal gör Johan endast healing på distans.
                    Info kommer.
                  </tr>
                  <td style={{ fontStyle: "italic" }}>
                Det tillkommer 18Kr per mil
                vid resor utanför Jönköping.{" "}
                  </td>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default Products;
