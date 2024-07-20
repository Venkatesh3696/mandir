import React from "react";
import Slider from "react-slick";

export default function SimpleSlider({ images }) {
  console.log(images);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    buttons: false,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className="flex w-full bg-green-200">
      {images.map((item, index) => {
        return (
          <div key={index} className="slider-item w-full justify-center">
            <img src={item.src} alt="puja" className="w-full bg-pink-400" />
          </div>
        );
      })}
    </Slider>
  );
}
