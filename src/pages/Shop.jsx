import React from 'react';
import './../styles/Shop.css'
import { products } from './../products'
import { Product } from '../components/Product';

const Shop = () => {
  return (
    <div className='shop-main'>
      <div className='shop-head'>
        <h3>Shop all products</h3>
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