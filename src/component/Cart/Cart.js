import React from 'react';

import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart)
     let total = 0 ; 
     let shipingPrice = 0 ; 
     let quantity = 0 ; 
    for(const product of cart){
        quantity = quantity + product.quantity ; 
         total = total + product.price * product.quantity ; 
         shipingPrice = shipingPrice + product.shipping
    }
    const tax = (total * 0.10).toFixed(2) ; 

    const grandTotal = total +  shipingPrice + parseFloat(tax) ; 
    return (
        <div className='cart'>
                <h1>Order summary </h1>
                <p>Product Item : {quantity}</p>
                <p>total price :${total} </p>
                <p>total shipping change : ${shipingPrice}</p>
                <p>tax : ${tax} </p>
                <h3>Grand total : ${grandTotal}</h3>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-btn'>Review order</button>
        </div>
    );
};

export default Cart;