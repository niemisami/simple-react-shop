import React, { useState } from 'react'
import Products from './Products';
import ShoppingList from './ShoppingList';

const Shop = () => {
  const [shoppingCartItems, setShoppingCardItems] = useState([])

  const onAddItemToShoppingCart = item => {
    const updatedItems = shoppingCartItems.concat(item)
    setShoppingCardItems(updatedItems)
  }
  
  return (
    <>
    <h1>Kauppa</h1>
    <div className='shop'>
      <Products onAddItemToShoppingCart={onAddItemToShoppingCart} />
      <ShoppingList products={shoppingCartItems} />
    </div>
    </>
  )
}

export default Shop
