import React, { useState } from 'react';

const ProductList = [
  { id: 1, name: 'Product A', category: 'Category 1', price: 10 },
  { id: 2, name: 'Product B', category: 'Category 2', price: 20 },
  { id: 3, name: 'Product C', category: 'Category 1', price: 15 },
  // Add more products as needed
];

const Addcf = () => {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [cart, setCart] = useState([]);
  
  const getTotalPrice = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  const filteredProducts = categoryFilter === 'All'
    ? ProductList
    : ProductList.filter(product => product.category === categoryFilter);

  return (
    <div>
      <h1>Product List</h1>

      <div>
        <label>Filter by Category:</label>
        <select onChange={(e) => handleFilterChange(e.target.value)}>
          <option value="All">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            {product.name} - {product.category} - ${product.price}
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <h2>Shopping Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
          </li>
        ))}
      </ul>

      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
};


export default Addcf;