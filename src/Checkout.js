import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv1p6HQcwl799LrBvYfhGd3pDqBpnyWV5xUQ&usqp=CAU"
                 alt=""/>
            
            <div>
                <h2 className="checkout__title">Your Shooping Basket</h2>
            </div>
            </div>
            <div className="checkout__right">
                <Subtotal/>
              
            </div>
        </div>
    );
}
export default Checkout;
