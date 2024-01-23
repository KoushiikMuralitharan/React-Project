import React from "react";
import "./HBanner.css"
const HBanner = () => {
  return (
    <div className="view">
      <div class="card">
        <div class="card__image1">
          <img src="https://codezeel.com/opencart/OPC03/OPC030053/image/catalog/cms-banner-2.png"></img>
          <img src="https://codezeel.com/opencart/OPC03/OPC030053/image/catalog/cms-banner-1.png"></img>
        </div>
        <div class="card__content">
          <p class="card__title">Card Title</p>
          <p class="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="card__button" href="#">
            Read More
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card__image2">
          <img src="https://p.turbosquid.com/ts-thumb/03/zkhVtf/I9/gardenpowertoolscollection33dmodel000/jpg/1613040960/600x600/fit_q87/fe711ff832ce9a6811f5929148ec13fde3f7146b/gardenpowertoolscollection33dmodel000.jpg"></img>
        </div>
        <div class="card__content">
          <p class="card__title">Card Title</p>
          <p class="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="card__button" href="#">
            Read More
          </a>
        </div>
      </div>

      <div class="card">
        <div class="card__image3">
        <img src="https://codezeel.com/opencart/OPC03/OPC030053/image/catalog/cms-banner-3.png"></img>
        <img src="https://www.idemcosb.com.my/media/magearray/blog/image/Small_Cover_13.png"></img>
        </div>
        <div class="card__content">
          <p class="card__title">Card Title</p>
          <p class="card__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a class="card__button" href="#">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default HBanner;
