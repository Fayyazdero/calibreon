import React from "react";
import Slider from "react-slick";
import Banner from "./../../pages/banner";

const Carousel = () => {
  let settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const sliderData = [
    {
      title: "You're ready. So are we.",
      imgLink:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      title: "You're ready. So are we.",
      imgLink:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
  ];
  return (
    <Slider {...settings}>
      {sliderData.length &&
        sliderData.map((item, index) => <Banner key={index} item={item} />)}
    </Slider>
  );
};

export default Carousel;
