import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import "./all-products.css"

const AllProducts = ({setCart, token, setDisplayedProducts, displayedProducts}) => {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="product-container">
      <h1>All Products</h1>
      <div className="product-list">
        {displayedProducts.map((product) => (
          <ProductCard key={product?.id} product={product} token={token} setCart={setCart} cardWidth={28}/>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;