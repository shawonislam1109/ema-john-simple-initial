import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Products.css';
const Products = (props) => {
    // console.log(props.porducting)
    const addToclick = props.addToshoppingCart; 
    const {id, category, 
        name,seller,
        price,stock,
        ratings,ratingsCount,
        img,shipping,quantity
    } = props.porducting; 

    return (
        <div className='producta'>
         <div>
           <img src={img} alt="" />
           <p className='nameStyle'>{name}</p>
           <p className='price'>price : ${price}</p>
           <p className='price'><small>seller : {seller}</small></p>
           <p className='price'>Ratings : {ratings}</p>
            </div>
           <button onClick={()=>addToclick(props.porducting)} className='button-1'><p>add to cart 
              <FontAwesomeIcon className='font-icon' FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon></p></button>
        </div>
    );
};

export default Products;