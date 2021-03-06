import React from "react";
import { Carousel } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BanniereAccueil.css";

export default function BanniereHome() {
  return (
    <div class="carouselSize">
      <Carousel className ="my-auto">
        <Carousel.Item>
          <img
            
            className="d-block w-80 "
            src="../images/img11.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-80"
            src="../images/img22.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}