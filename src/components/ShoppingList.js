import React from 'react'
import PropTypes from 'prop-types'

const ShoppingListItem = ({ product, onClick }) => (
  <li className='shopping-list-item' onClick={() => onClick(product)}>
    {product.name}
  </li>
)

ShoppingListItem.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    details: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired
}

const ShoppingList = ({ products, onRemove }) => {
  return (
    <div className='shopping-list'>
      <h1>Shopping list</h1>
      <ol>
        {products.map((product, index) => (
          <ShoppingListItem onClick={onRemove} key={`${product.name}_${index}`} product={product} />
        ))}
      </ol>
    </div>
  )
}

ShoppingList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired
  })).isRequired,
  onRemove: PropTypes.func.isRequired
}

export default ShoppingList
