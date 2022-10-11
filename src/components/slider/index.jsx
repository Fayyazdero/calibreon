import React from 'react'
import Slider from "react-slick";
import Banner from '../banner';


const Carousel = () => {
    let settings = {
        // dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
  return (
    <Slider {...settings}>
      <div>
        <Banner
        title="You're ready. So are we."
        imgLink='https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'


            />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  )
}

export default Carousel