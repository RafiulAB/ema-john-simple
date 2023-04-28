import React from 'react';

const Cart = (props) => {
    const cart= props.cart;
    // const total = cart.reduce((total,prod)=> total+prod.price,0)
    let total = 0;
    for(let i=0 ; i<cart.length ;i++){
        const product = cart[i];
        total = total+ product.price
    }
    let shiiping = 0;
    if(total>200){
        shiiping = 12.99
    }
    else if (total>400){
        shiiping = 9.99
    }
      else if (total>0){
        shiiping = 14.99
      }
      const tax = (total/10).toFixed(2);
      const grandTotal = (total + shiiping + Number(tax)).toFixed(2)
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product price: {total}</p>
            <p><small>Shiiping cost: {shiiping}$</small></p>
            <p><small>Tax + VAT: {tax}$</small></p>
            <p>Total price: {grandTotal}$</p>
        </div>
    );
};

export default Cart;