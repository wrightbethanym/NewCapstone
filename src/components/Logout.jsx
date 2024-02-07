import React, {useEffect} from 'react';

export default function Logout({setCart, setToken}) {
useEffect(()=>{
    localStorage.removeItem("cart")
    localStorage.removeItem("token")
    setCart([])
    setToken(null)
},[])
    return (
        <div>
            <h2>Logout</h2>
            <p>You have successfully logged out!</p>
        </div>
    );
};