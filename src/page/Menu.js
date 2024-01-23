import React from 'react'
import { useState } from "react";
import Products from "../Component/Products/Products";
import products from "../db/data";
import Recommended from "../Component/Recommended/Recommended";
import Sidebar from "../Component/Sidebar/Sidebar";
import Card from "../Component/Card";
import Mhome from '../Component/Mhome'
import {CartProvider} from "react-use-cart"
import Addcf from '../Component/Addcf';
import MBanner from '../Component/MBanner'

const Menu = () => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice}) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <div>
      <MBanner/> 
      <CartProvider>
      <Mhome/>
      </CartProvider>
       {/* <Sidebar handleChange={handleChange} /> 
       <Navigation query={query} handleInputChange={handleInputChange} /> 
      <Recommended handleClick={handleClick} />
      <Products result={result} />  */}
      


    </div>
  )
}

export default Menu