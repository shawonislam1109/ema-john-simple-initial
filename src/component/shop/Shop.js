import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../product/Products';
import { addToDb, getTostorageData } from '../../utilities/fakedb';
import './Shop.css'
const Shop = () => {
    const [product , setProduct] = useState([]); 
    const [cart, setCart] = useState([]);
    
    useEffect(()=>{
        // console.log('fetch data first',product)
        fetch('products.json')
        .then(res => res.json())
        .then(data => {
            setProduct(data)
            // console.log('fetch data')
        })
    },[])

    useEffect(()=>{
        const storeData = getTostorageData(); 
        // console.log(storeData)
        const saveCart = []; 
         for(const id in storeData){
             const addedData = product.find(products => products.id === id)
             if(addedData){
                const quantity = storeData[id]; 
                addedData.quantity = quantity ; 
                console.log(addedData)
                saveCart.push(addedData); 
             }
            }
            setCart(saveCart)
    },[product]);


    const addTocartShopping = (seletedProduct) =>{
        const exits = cart.find(product => product.id === seletedProduct.id); 
        let setItem = []; 
        if(!exits){
            seletedProduct.quantity = 1 ; 
            setItem = [...cart, seletedProduct];
        }
        else{
            const rest = cart.filter(product => product.id !== seletedProduct.id);
            seletedProduct.quantity = seletedProduct.quantity + 1 ; 
            setItem = [...rest, seletedProduct] ; 
        }
        // console.log(setItem); 
        setCart(setItem); 
        addToDb(seletedProduct.id)
    }

    return (
        <div className='product'>

            <div className="shopping-product">
            
             {
                product.map(shop => <Products porducting ={shop}
                key = {shop.id}
                addToshoppingCart = {addTocartShopping}
                ></Products>) 
             } 
             
             </div> 

             <div className="shopping-cart">
                <Cart cart = {cart}></Cart>
             </div>
        </div>
    );
};

export default Shop;