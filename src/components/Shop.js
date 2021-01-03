import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Products from './Products';
import ShoppingList from './ShoppingList';

const Shop = () => {
  const [localStorageProducts, setProductsToLocalStorage] = useLocalStorage('shopping-list', [])
  const [shoppingCartItems, setShoppingCardItems] = useState(localStorageProducts)

  const onAddItemToShoppingCart = item => {
    const newProduct = {...item}
    const updatedItems = shoppingCartItems.concat(newProduct)
    setShoppingCardItems(updatedItems)
  }

  const onRemoveItemFromShoppingCart = productToBeRemoved => {
    const updatedItems = shoppingCartItems.filter(product => product !== productToBeRemoved)
    setShoppingCardItems(updatedItems)
  }

  useEffect(() => {
    setProductsToLocalStorage(shoppingCartItems)
  }, [setProductsToLocalStorage, shoppingCartItems])

  return (
    <>
    <h1>Kauppa</h1>
    <div className='shop'>
      <Products onAddItemToShoppingCart={onAddItemToShoppingCart} />
      <ShoppingList products={shoppingCartItems} onRemove={onRemoveItemFromShoppingCart} />
    </div>
    </>
  )
}

export default Shop
