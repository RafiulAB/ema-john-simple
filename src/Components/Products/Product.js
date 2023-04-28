import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import './Product.css'


const Product = (props) => {
   const {name,img,seller,price,stock}= props.product;
  
    return (
        <div className='product'>
        <div className='image-container'>   
           <img height="300" width="327" src={img} alt="" />
        </div>
        <div className='info-container'>
            <div className="product-text">
            <h3>{name} </h3>
           <br />
           <p><small>by: {seller}</small></p>
           <p>$ {price}</p>       
           <p><small>Only {stock} left in stock - Order naw</small></p>
            <button 
            className='main-button'
            onClick={()=> props.handleAddProduct(props.product)}>
                 <FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
        </div>
     </div>      
    );
};
export default Product;