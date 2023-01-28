import React, { useContext } from 'react';
import { ShopContext } from './../context/shop-context'

export const Product = (props) => {
    const { id, productName, productPrice, productImg } = props.data
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
    <div className='product-card'>
        <button className='add-to-cart-btn' onClick={() => addToCart(id)}>
        Add to cart
        </button>
        <button className='add-to-cart-btn' onClick={() => removeFromCart(id)}>
        Remove
        </button>
        {cartItemAmount > 0 && <p>{cartItemAmount}</p>}
        <img src={productImg} />
        <div className='product-desc'>
            <p className='product-name'>{productName}</p>
            <p className='product-price'>€{productPrice}.00</p>
        </div>
    </div>
    )
}