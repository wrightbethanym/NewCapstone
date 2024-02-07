import React from 'react'
import "./product-card.css"
import { useNavigate } from 'react-router-dom'

export default function ProductCard({product, setCart, token, cardWidth, parentComp, removeItem}) {
  const navigate=useNavigate()
    const addToCart = (product) => {
    console.log(product)
    const localCart=JSON.parse(localStorage.getItem("cart"))
    const result=localCart.find(item=>item.id==product.id)
    if(!result){
        product.quantity=1
        const updatedCart=[...localCart, product]
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify (updatedCart))
    }
    else {
        result.quantity+=1
        const restOfItems=localCart.filter(item=>item.id!=result.id)
        const updatedCart=[...restOfItems, result]
        setCart(updatedCart)
        localStorage.setItem("cart", JSON.stringify (updatedCart))
    }

    } 
    const cardStyle={width: `${cardWidth}%`}
    return (
      <div className="product-card" key={product?.id} style={cardStyle}>
            <img src={product?.image} alt={product?.title} />
            <h2>{product?.title}</h2>
            <p>Price: ${product?.price}</p>
            <p>Category: {product?.category}</p>


{(token && parentComp!="cart") && <button onClick={() => addToCart(product)}>Add to Cart</button>}
{!token && <button onClick={()=>navigate(`/login/`)}>Login to Buy</button>}
{(parentComp=="cart" && token) && <button onClick={()=>{removeItem(product?.id)}}>Remove Item</button>}
<button onClick={()=>navigate(`/product/${product.id}`) }>see details</button>
    </div>
  )
}
