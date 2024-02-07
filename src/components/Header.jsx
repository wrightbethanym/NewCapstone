import React from 'react';
import "./header.css"
import Filter from './Filter';

const Header = ({token, setToken, displayedProducts, setDisplayedProducts, productData}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <a href="https://st3.depositphotos.com/4177785/35869/v/600/depositphotos_358692326-stock-illustration-convenience-store-rgb-color-icon.jpg">              
                        <img src="https://st3.depositphotos.com/4177785/35869/v/600/depositphotos_358692326-stock-illustration-convenience-store-rgb-color-icon.jpg" alt="Store Logo"/>
                    </a>
                </div>
                <nav className="navigation">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/review">Review Form</a></li>
                    </ul>
                </nav>
               
                <div className="search">
                    <input type="text" placeholder="Search products..." />
                    <button type="button">Search</button>
                </div>
               
                <div className="user-actions">
                   
                    {!token && <a href="/login">Login</a>}
                    <a href="/register">Register</a>
                    {token && <a href="/logout">Logout</a>}
                    <a href="/cart">Cart</a>
                </div>
            </div>
            <Filter setDisplayedProducts={setDisplayedProducts} displayedProducts={displayedProducts} productData={productData}/>
        </header>
    );
};

export default Header;
