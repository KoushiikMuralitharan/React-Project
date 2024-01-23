import React from 'react'
import Footer from './Footer.css';
import './ABanner.css';
import Aboutus from'../images/Aboutus .jpg';
function ABanner() {
  return (
    <>
    <div className='wholeabout'>
    <div className='masses'>
    <div className='about'>
  
  <div style={{color: 'yellow'}} >
      <b>Who We Are</b>
      </div>
  <div style={{width:"60%"}}>
  Welcome to Toolzy, your one-stop destination for high-quality tools and equipment! Founded in 2024, we take pride in being a reliable and efficient platform for all your tool needs. At Toolzy, our mission is to empower professionals and DIY enthusiasts alike by providing access to a wide range of top-notch tools. We understand the importance of having the right tools for the job, and our goal is to make the ordering process seamless, convenient, and cost-effective.We source our tools from reputable manufacturers known for their commitment to quality and durability. Every product in our catalog undergoes rigorous testing to ensure it meets the highest industry standards.Whether you're a seasoned professional or just starting on your DIY journey, we have a diverse selection of tools to meet your specific requirements. From power tools to hand tools, safety equipment to accessories, we've got you covered.
  </div>
  </div>
  <div className='all'>
  <div class="cookie-card">
  <span class="taitle">Leadership Principles</span>
      <p class="description">Our Leadership Principles are more than inspirational wall hangings. The 16 principles guide our discussions and decisions every day.</p>
          <button class="accept">
              Read More
          </button>
      </div>
      <div class="cookie-card">
      <span class="taitle">Awards and Recognition</span>
      <p class="description">We use cookies to ensure that we give you the best experience on our website.</p>
          <button class="accept">
              Read More
          </button>
      </div>
      <div class="cookie-card">
      <span class="taitle">Facts About Petshop</span>
      <p class="description">We use cookies to ensure that we give you the best experience on our website.</p>
          <button class="accept">
              Read More
          </button>
      </div>
      </div>
    </div>
    </div>
    </>
  )
}

export default ABanner;
