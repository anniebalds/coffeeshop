import React, {useContext} from 'react';
import { ShopContext } from '../context/shop-context'
import { MinusCircle, PlusCircle } from 'phosphor-react'



export const CartItem = (props) => {
    const { id, productName, productPrice, productImg } = props.data
    const { addToCart, removeFromCart, cartItems, updateCartItemCount } = useContext(ShopContext)

    const cartItemAmount = cartItems[id]


  return (
    <div className='cart-item-card'>
      <div className='count-handler'>
        <button onClick={() => removeFromCart(id)}><MinusCircle size={32} /></button>
        <input value={cartItemAmount} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
        <button onClick={() => addToCart(id)}><PlusCircle size={32} /></button>
      </div>
        <img  className='product-img' src={productImg} />
        <div className='product-desc'>
            <p className='product-name'>{productName}</p>
            <p className='product-price'>€{productPrice}.00</p>
        </div>
    </div>
  )
}