import React from 'react';
import './../styles/Shop.css'
import { products } from './../products'
import { Product } from '../components/Product';

const Shop = () => {
  return (
    <div className='shop-main'>
      <div className='shop-head'>
        <h1>Shop all products</h1>
        <h4>Available for home delivery or collection from our Morzine coffee shop</h4>
      </div>

      <div className='shop-content'>
        <div className='products'>
          {products.map((product) => (
            <Product data={product} key={product.id}/>
          )
          )}
        </div>
      </div>
    </div>
  )
}

export default Shop