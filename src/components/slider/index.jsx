import React from "react";
import Slider from "react-slick";

const Carousel = ({ children, arrows, slidesToShow }) => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: `${arrows}`,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: parseInt(`${slidesToShow}`),
    slidesToScroll: 0,
    autoplay: true,
  };

  console.log(settings, "D");
  return <Slider {...settings}>{children}</Slider>;
};

export default Carousel;
