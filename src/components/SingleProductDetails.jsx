import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "./single-product-details.css"
import ProductCard from './ProductCard';


const SingleProductDetails = ({ token }) => {
  const {id} = useParams()
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <div className="details-container">
      {loading ? (
        <p>Loading product details...</p>
      ) : product ? (
        <ProductCard product={product} token={token} cardWidth={100}/>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default SingleProductDetails;