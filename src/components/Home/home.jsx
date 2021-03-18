import React from "react";
import "./home.scss";
import ControlledCarousel from "../Carousel/carousel";
import OneLine from "../../assets/oneline.png";
import useWindowDimensions from "../../sizeHook";

function Home() {
  const { width } = useWindowDimensions();

  return (
    <main className="App-home container-fluid">
      <div className="row">
        <div className="text-center">
          <div className="col-12 mx-auto">
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
              SJÄLSHARMONI
            </h1>
            <p>Välkommen till Själsharmoni!</p>
            {width > 600 ? (
              <ControlledCarousel className="carousel" />
            ) : (
              <img
                src={OneLine}
                alt=""
                style={{ width: "340px", height: "200px" }}
              ></img>
            )}
            <div className={width > 600 ? "col-6 mx-auto" : "col-8 mx-auto"}>
              <p>
                Att må bra och känna harmoni i själen är det många som inte gör
                i dessa stressstider vi lever i. Man ska hinna så mycket som
                möjligt på så kort tid som möjligt.
              </p>
              <p>
                Tid är det enda vi inte styr över, nej men vi styr över hur vi
                ska använda vår tid.
              </p>
              <p>
                “Människan offrar hälsan för att tjäna pengar, sedan offrar hon
                pengar för att få tillbaka hälsan. Hon är så angelägen om sin
                framtid att hon inte njuter av nuet. Följden blir att hon inte
                lever i nuet och inte heller i framtiden. Hon lever som om hon
                aldrig ska dö och sen dör hon utan att någonsin har levt.”
              </p>
              <p style={{ textAlign: "right" }}>Dalai Lama</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
