import React from "react";
import "./products.scss";

function Products() {
  return (
    <main className="App-products container-fluid">
      <div className="row">
        <div className="col-12 mx-auto">
          <h1 style={{ textAlign: "center" }}>Tjänster och Priser</h1>
          <h3>Johan</h3>
          <table className="tableHead">
            <tr>
              <th>Tjänst</th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>Vägledning via telefon</td>
              <td>500Kr</td>
            </tr>
            <tr>
              <td>Healing på distans</td>
              <td>300Kr</td>
            </tr>
            <tr>
              <td>Rensning av energier i hus</td>
              <td>950Kr</td>
            </tr>
          </table>
          <h3 className="topMargin">Marie</h3>
          <table className="tableHead">
            <tr>
              <th>Tjänst</th>
              <th>Pris</th>
            </tr>
            <tr>
              <td>Transhealing via telefon</td>
              <td>300Kr</td>
            </tr>
            <tr>
              <td>Hembesök</td>
              <td>850Kr</td>
            </tr>
            <tr>
              <td>Medial Coaching via telefon</td>
              <td>300Kr</td>
            </tr>
            <tr>
              <td>Medial Coaching hembesök</td>
              <td>850Kr</td>
            </tr>
            <tr>
              <td>Transmedium via telefon</td>
              <td>300Kr</td>
            </tr>
            <tr>
              <td>Transmedium hembesök</td>
              <td>850Kr</td>
            </tr>
            <tr>
              <td>Husrensning</td>
              <td>Kontakta</td>
            </tr>
            <tr>
              <td>Djurkommunikation</td>
              <td>Kontakta</td>
            </tr>
            <tr>
              <td>Djurkommunikation</td>
              <td>850Kr</td>
            </tr>
            <tr>
              <td>Sittning med tarot och pendel via telefon</td>
              <td>650Kr</td>
            </tr>
            <tr>
              <td>Sittning med tarot och pendel hembesök</td>
              <td>850Kr</td>
            </tr>
          </table>
          <h3 className="topMargin">Gemensammt</h3>
          <table className="tableHead">
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
          </table>
          <p style={{ paddingTop: 46 }}>
            Vid hembesök kan reseersättning erfordras, fråga gärna vid bokning.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Products;
