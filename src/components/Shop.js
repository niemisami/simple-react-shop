import React, { useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage';
import Products from './Products';
import ShoppingList from './ShoppingList';

const Shop = () => {
  const [localStorageProducts, setProductsToLocalStorage] = useLocalStorage('shopping-list', [])
  const [shoppingCartItems, setShoppingCardItems] = useState(localStorageProducts)

  const onAddItemToShoppingCart = item => {
    const updatedItems = shoppingCartItems.concat(item)
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
      <ShoppingList products={shoppingCartItems} />
    </div>
    </>
  )
}

export default Shop
