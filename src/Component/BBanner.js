import React from "react";
import i1 from '../images/i1.png'
import i2 from '../images/i2.png'
import i3 from '../images/i3.png'
import i4 from '../images/i4.png'
import i5 from '../images/i5.png'
import i6 from '../images/i6.png'
import i7 from '../images/i7.png'
import i8 from '../images/i8.png'
import i9 from '../images/i9.png'
import i10 from '../images/i10.png'
import "./BBanner.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const BBanner = () => {
  const data = [
    {
      n:`master`,
      imgs: i1,
    },
    {
      n:`master`,
      imgs: i2,
    },
    {
      n:`master`,
      imgs: i3,
    },
    {
      n:`master`,
      imgs: i4,
    },
    {
      n:`master`,
      imgs: i5,
    },
    {
      n:`master`,
      imgs:i6,
    },
    {
      n:`master`,
      imgs:i7,
    },
    {
      n:`master`,
      imgs:i8,
    },
    {
      n:`master`,
      imgs:i9,
    },
    {
      n:`master`,
      imgs:i10,
    }
  ]
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1
  };
  return (
          <div className="w-3/4 m-auto">
            <div className="mt-20">
            <Slider {...settings}>
                {data.map((d) =>{
                 return(
                  <div className="bg-white w-60 mt-2 pt-2">
                  <center><img src={d.imgs} alt="12"/></center>
                </div>
                 )
                }
                )}
                </Slider>
            </div>
          </div>
    
  );
};

export default BBanner;
