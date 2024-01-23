import React from 'react'
import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";
import product4 from "../images/product4.jpg";
import product5 from "../images/product5.jpg";
import { useNavigate } from "react-router-dom";
import './NewProduct.css'
const NewProducts = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="mt-5 pt-2">
        <p className="h1 text-center"> NEW PRODUCTS</p>
      </div>
      <div className="view pt-2 mt-5 ">
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product1} className="pic1"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
            <button className='btttn' onClick={() => navigate("/menu")} >Buy Now</button>
          </div>
          
        </div>
        
      </div>

      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product2} className="pic2"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product3} className="pic3"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>  <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product4} className="pic4"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product5} className="pic5"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
        </div>
        
      </div>
      </div>

      <div className="view pt-2 mt-5 ">
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product1} className="pic1"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>

      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product2} className="pic2"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")} >Buy Now</button>
          </div>
          
        </div>
        
      </div>
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product3} className="pic3"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>  <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product4} className="pic4"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn' onClick={() => navigate("/menu")} >Buy Now</button>
          </div>
          
        </div>
        
      </div>
      <div>
        <div className="card2">
          <div className="card-img2">
            <img src={product5} className="pic5"></img>
          </div>
          <div className="card-info">
            <p className="text1-title">Product title </p>
            <p className="text1-body">Product description and details</p>
          </div>
          <div className="card-footer">
          <button className='btttn'  onClick={() => navigate("/menu")}>Buy Now</button>
          </div>
          
        </div>
        
      </div>
      </div>
    </>
  )
}

export default NewProducts