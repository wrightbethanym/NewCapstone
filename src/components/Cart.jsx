import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
const Cart = ({token}) => {
  const [cartItems, setCartItems] = useState([
    []
  ]); 
  useEffect(()=>{
    const localCart=localStorage.getItem("cart")
    if(localCart){setCartItems(JSON.parse(localCart))}
  },[])

  const updateQuantity = (itemId, newQuantity) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeItem = (itemId) => {
    const localCart=JSON.parse(localStorage.getItem("cart"))
    const updatedCart = localCart.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  };
  console.log(token)
  return (
    <div style={{width: "80%", margin: "0 auto", display: "flex",
    flexDirection: "column",
    alignItems: "center"}}>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <ProductCard token={token} product={item} cardWidth={50} parentComp="cart" removeItem={removeItem}/>
      ))}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
