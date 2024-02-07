import {Routes, Route} from "react-router-dom";
import AllProducts from "./components/AllProducts";
import Cart from "./components/Cart";
import SingleProductDetails from "./components/SingleProductDetails";
import SignIn from "./components/Login";
import Checkout from "./components/Checkout";
import Reviewform from "./components/Reviewform";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Register from "./components/Register";
import Logout from "./components/Logout";

import {useState, useEffect} from "react";

export default function App() {
    const [displayedProducts, setDisplayedProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [token, setToken] = useState(null);
    const [productData, setProductData] = useState([]);
    useEffect(()=>{const localToken=localStorage.getItem("token")
    if(localToken){

    setToken(localToken)
    } 
    }, [])
    useEffect(()=>{
    if(token){const localCart=localStorage.getItem("cart")
    if(!localCart){

      localStorage.setItem("cart",JSON.stringify([]))
    } else {
      setCart(JSON.parse(localCart))
    }}

},[token])
    return <>
      <Header setToken={setToken} token={token} productData={productData} setDisplayedProducts={setDisplayedProducts} displayedProducts={displayedProducts}/> 
          <Routes> 
              <Route
                  path="/"
                  element={<Homepage productData={productData} setProductData={setProductData} setDisplayedProducts={setDisplayedProducts} displayedProducts={displayedProducts} setCart={setCart} token={token}/>}
              />
              <Route path="/login" element={<SignIn setToken={setToken} token={token}/>} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/product/sort" element={<Filter />} />
              <Route path="/cart" element={<Cart token={token}/>} />
              <Route path="/product/:id" element={<SingleProductDetails token={token}/>} />
              <Route path="/review" element={<Reviewform/>}/>
              <Route path="/register" element={<Register/>}/>
              <Route path="/logout" element={<Logout setToken={setToken} setCart={setCart}/>}/>
              </Routes> 
         </>
  }
{/* <AllProducts products={products} setProducts={setProducts} /> */}