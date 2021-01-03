import React from 'react'
import PropTypes from 'prop-types'

const ShoppingListItem = ({ product }) => (
  <li>
    {product.name}
  </li>
)

ShoppingListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired
}

const ShoppingList = ({ products }) => {
  return (
    <div className='shopping-list'>
      <h1>Shopping list</h1>
      <ul>
        {products.map((product, index) => (
          <ShoppingListItem key={`${product.name}_${index}`} product={product} />
        ))}
      </ul>
    </div>
  )
}

ShoppingList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired
  })).isRequired
}

export default ShoppingList
