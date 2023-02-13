import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";



function ShoppingCart({
    visibilty,
    cakes,
    onProductRemove,
    onClose,
}) {

    const [count, setCount] = useState(1);


    const increment = (cake) => {
        cake.count = cake.count + 1;
        setCount(cake.count);
    }

    const decrement = (cake) => {
        cake.count = Math.max(1, cake.count - 1);
        setCount(cake.count);
    }

    return (
        <div className="cartContainer" style={{ display: visibilty ? "block" : "none" }}>
            <div className="shoppingCart">
                <div className="header">
                    <h2>Shopping cart</h2>
                    <button className="btn close-btn" onClick={onClose}><IoIosCloseCircleOutline size={30} /></button>
                </div>
                <div className="cart-products">
                    {cakes.length === 0 && (<span className="empty-text">Your cart is empty</span>)}
                    {cakes.map((cake) => (
                        <div className="cart-product" key={cake.id}>
                            <img src={cake.image} alt={cake.name} />
                            <div className="product-info">
                                <h3>{cake.name}</h3>
                                <span className="product-price">{Number(cake.price * cake.count).toFixed(2)}$</span>

                            </div>
                            <div className="countOfCakes">
                                <button className="decBtn" onClick={() => decrement(cake)}>-</button>

                                <h4 className="cakeCountNumber">{cake.count}</h4>
                                <button className="incBtn" onClick={() => increment(cake)} >+</button>

                            </div>
                            <button
                                className="btn remove-btn" onClick={() => onProductRemove(cake)}>
                                <RiDeleteBinLine size={20} /></button>
                        </div>

                    ))}
                    {cakes.length > 0 && (

                        <button className="btn checkout-btn"> Place order</button>

                    )}


                </div>
            </div >
        </div >


    );
}


export default ShoppingCart;
