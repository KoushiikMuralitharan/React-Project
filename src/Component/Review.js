import React from "react";
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Review.css";
const Review = () => {
  const data1 = [
    {
      img: user1,
      name: `User1`,
      desc: `Content`,
    },
    {
      img: user2,
      name: `User2`,
      desc: `Content`,
    },
    {
      img: user3,
      name: `User3`,
      desc: `Content`,
    },
  ];
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 2,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <div className="">
        <p className="h1 text-center mt-5 md:gap-2">WHAT THEY SAY</p>
      </div>

      <div className="mt-20">
        <div className="view">
          {data1.map((d) => {
            return (
              <>
                <div class="card">
                  <div class="image">
                    <img
                      src={d.img}
                      alt=""
                      className="rounded-full m-auto mt-2 mb-2"
                    ></img>
                  </div>
                  <div class="content">
                    <a href="#">
                      <span class="title">{d.name}</span>
                    </a>
                    <p class="desc">{d.desc}</p>
                    <a class="action" href="#">
                      Read more
                      <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Review;
