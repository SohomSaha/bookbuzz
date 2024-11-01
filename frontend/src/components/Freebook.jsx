import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import List from "../../public/list.json";
import Cards from "./Cards";
function Freebook() {
  const filterData = List.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  console.log(filterData);
  return (
    <>
      <div className="max-w-screen-2x1 container mx-auto px-10">
        <div className="md:px-4">
        <h1 className="font-semibold text-xl pb-2">Free offered courses</h1>
      </div>
      <div className="">
      <Slider {...settings}>
        {filterData.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))}
      </Slider>
      </div>
      </div>
    </>
  );
}

export default Freebook;
