import React from "react";
import "./home.scss";
import ControlledCarousel from "../Carousel/carousel";
import OneLine from "../../assets/oneline.png";
import useWindowDimensions from "../../sizeHook";

function Home() {
  const { height, width } = useWindowDimensions();
  return (
    <main className="App-home container-fluid">
      <div className="row">
        <div className="text-center">
          <div className="col-10 mx-auto">
            <h1 style={{ textAlign: "center", marginTop: "2rem" }}>
              SJÄLSHARMONI
            </h1>
            <p>Hejsan och välkommen till Själsharmoni!</p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae optio
            </p>
            {console.log(width)}
            {width > 600 ? (
              <ControlledCarousel className="carousel" />
            ) : (
              <img
                src={OneLine}
                alt=""
                style={{ width: "340px", height: "200px" }}
              ></img>
            )}

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repudiandae optio eveniet facilis error reiciendis quas molestias
              culpa aliquid quo tenetur, dolore, quis itaque eius ratione ea
              iusto omnis fugiat recusandae.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Repudiandae optio eveniet
              </p>
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

export default Home;
