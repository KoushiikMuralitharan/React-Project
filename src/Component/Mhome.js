import React from "react";
import Itemcart from "./Itemcart";
import data from "./Data";
import "./Header.css";
const Mhome = () => {
  return (
    <>
     
      <h1 className="text-center mt-3">All Items</h1>
      <div className="view">
        {data.productData.map((item, index) => {
          return (
            <>
            <div className="view1">   
            <Itemcart
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              item={item}
              key={index}
            ></Itemcart>
            </div>
             </>
            
          );
        })}
        </div>
    </>
  );
};

export default Mhome;
