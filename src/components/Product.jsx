import React, { useContext } from 'react';
import { ShopContext } from './../context/shop-context';
import { MinusCircle, PlusCircle, ShoppingCart } from 'phosphor-react'

export const Product = (props) => {
    const { id, productName, productPrice, productImg } = props.data
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]

  return (
    <div className='product-card'>
            <div>

            {cartItemAmount > 0 && 
            <button className='add-to-cart-btn' onClick={() => removeFromCart(id)}>
            <MinusCircle size={32} />
            </button>
            }
            <button className='add-to-cart-btn' onClick={() => addToCart(id)}>
            <PlusCircle size={32} />   
            </button>
            <span>{cartItemAmount > 0 && <> <ShoppingCart size={22} /> {cartItemAmount} </>}</span>
        </div>
      
        <img src={productImg} />
        <div className='product-desc'>
            <p className='product-name'>{productName}</p>
            <p className='product-price'>€{productPrice}.00</p>
        </div>
    </div>
    )
}