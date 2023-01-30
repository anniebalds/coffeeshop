import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShopContext } from './../context/shop-context';
import { MinusCircle, PlusCircle, ShoppingCart } from 'phosphor-react'

export const Product = (props) => {
    const { id, productName, productPrice, productImg } = props.data
    const { addToCart, removeFromCart, cartItems } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]
    const navigate = useNavigate()

  return (
    <div className='product-card'>

        <div>
            <img src={productImg} />
            <div className='product-desc'>
                <p className='product-name'>{productName}</p>
                <p className='product-price'>€{productPrice}.00</p>
            </div>
        </div>

        <div className='product-actions'>

            

            {cartItemAmount > 0 && 
            <>
            <button onClick={() => removeFromCart(id)}>
            <MinusCircle size={40} />
            </button>
            <span className='cart-item-amount' onClick={() => navigate('/cart')}>{cartItemAmount > 0 && <> <ShoppingCart size={28}/> {cartItemAmount} </>}</span>
            </>
            }

            <button className='add-to-cart-btn' onClick={() => addToCart(id)}>
            <PlusCircle size={40} />   
            </button>
        </div>
    </div>
    )
}