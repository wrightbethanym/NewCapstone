import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import ProductCard from './ProductCard';
import AllProducts from './AllProducts';
import "./homepage.css"


export default function Homepage({setCart, token, setDisplayedProducts, displayedProducts, productData, setProductData}) {

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/');
        setProductData(response.data);
        setDisplayedProducts(response.data);
      } catch (error) {
        console.error('Error fetching featured products:', error);
      }
    };

    fetchFeaturedProducts();
  }, []);

  return (
    <div className="title-container">
      <h1>Welcome to The Everything Store!</h1>
      <div className="product-list">
        {/* {featuredProducts.map((product) => (
          // <ProductCard key={product.id} product={product} />
          <p>{product?.title}</p>
        ))} */}
        <AllProducts setCart={setCart} token={token} setDisplayedProducts={setDisplayedProducts} displayedProducts={displayedProducts}/>
      </div>
    </div>
  );
};

