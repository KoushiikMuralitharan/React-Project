import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
const Banner = () => {
  return (
    <>
    <Carousel data-bs-theme="dark" >
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://codezeel.com/opencart/OPC03/OPC030053/image/cache/catalog/main-banner-1-1903x620.jpg"
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://codezeel.com/opencart/OPC03/OPC030053/image/cache/catalog/main-banner-2-1903x620.jpg"
        alt="Second slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://codezeel.com/opencart/OPC03/OPC030053/image/cache/catalog/main-banner-3-1903x620.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  <br/>
</>
  )
}

export default Banner;








