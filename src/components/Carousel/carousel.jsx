import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import road from "../../assets/road.jpeg";
import eyeLogo from "../../assets/SJALSHARMONI_EMBLEM_WBG@4xCUT.png";
import oneline from "../../assets/oneline.png";
import bild1 from "../../assets/Bild 1.webp";
import bild2 from "../../assets/Bild 2.jpg";
import bild3 from "../../assets/Bild 3.webp";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className=" carouselDiv container col-lg-8 col-lg-offset-8">
      {/* <div className="container-fluid"> */}

      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={eyeLogo}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="activ d-block img-fluid w-100 "
            src={road}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={oneline}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={bild1}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={bild2}
            alt="fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={bild3}
            alt="sixth slide"
          />
        </Carousel.Item>
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default ControlledCarousel;
