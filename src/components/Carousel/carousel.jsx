import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./carousel.scss";
import road from "../../assets/road.jpeg";
import hands from "../../assets/hands.jpeg";

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
            className="activ d-block img-fluid w-100 "
            src={road}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src={hands}
            alt="Second slide"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
          <img
            className="d-block img-fluid w-100 "
            src="https://images.unsplash.com/photo-1554132273-851fc5eb4a2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1767&q=80"
            alt="Third slide"
          />
        </Carousel.Item> */}
      </Carousel>
      {/* </div> */}
    </div>
  );
}

export default ControlledCarousel;
