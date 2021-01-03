import React from 'react'
import PropTypes from 'prop-types'
import products from '../server/products'

const Product = ({ product, onClick }) => (
  <li className='product-list-item' key={product.name} >
    <div className='product-details' style={{ backgroundColor: product.details}}/> 
    <p>
     {product.name}
    </p>
    <button onClick={() => onClick(product)} >Ostoskoriin</button>
  </li>
)

Product.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired
}

const Products = ({  onAddItemToShoppingCart }) => {
  return (
    <section className='products'>
      <h2>Tuotteet</h2>
      <ul className='product-list'>
        {products.map(product => (
          <Product key={product.name} product={product} onClick={onAddItemToShoppingCart} />
        ))}
      </ul>
    </section>
  )
}

Products.propTypes = {
 onAddItemToShoppingCart: PropTypes.func.isRequired
}

export default Products
