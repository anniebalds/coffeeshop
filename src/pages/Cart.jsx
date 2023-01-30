import React, { useContext } from 'react'
import './../styles/Cart.css'
import { products } from '../products'
import { ShopContext } from '../context/shop-context'
import { CartItem } from '../components/CartItem'
import { useNavigate } from 'react-router-dom'
import { ArrowUDownLeft } from 'phosphor-react' 


const Cart = () => {
    const { cartItems, getTotalCartAmount } = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate()

  return (
    <div className='cart-content'>
        <h1>Your shopping basket</h1>


        {totalAmount > 0 ? (
        <>
            <div className='checkout'>
                <button onClick={() => navigate('/shop')}>Continue shopping <ArrowUDownLeft size={22} /></button>
                <button>Go to checkout</button>
            </div>

            <div className='cart-items'>
                {products.map((product) => {
                    if(cartItems[product.id] !== 0) {
                        return <CartItem data={product} key={product.id} />
                    }
                })}
            </div>

            <p className='subtotal'>Subtotal: €{totalAmount}.00</p>
            <p className='delivery'>Delivery options at checkout</p>

        </>
        ) : (
            <h2>Your basket is currently empty</h2>
        )}

    </div>
  )
}

export default Cart