import React, { createContext, useState } from 'react'
import { products } from '../products'

export const ShopContext = createContext(null)

//makes a default empty cart object with a 0 assigned to each product id
// {
//     1: 0,
//     2: 0,
//     3: 0
// }
const getDefaultCart = () => {
    let cart = {}
    for (let i=1; i < products.length+1; i++) {
        cart[i] = 0;
    }
    return cart
}


export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}