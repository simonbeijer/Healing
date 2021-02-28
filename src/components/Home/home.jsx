import React from "react";
import "./home.scss";
import ControlledCarousel from "../Carousel/carousel";

function Home() {
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
            <ControlledCarousel className="carousel" />
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
