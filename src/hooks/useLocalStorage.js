import { useCallback, useState } from "react"

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
      try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      } catch (error) {
        return initialValue
      }
  })
  const setValue = useCallback(value => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(`error saving value ${value} to local storage`, error)
    }
  }, [key])

  return [storedValue, setValue]
}

export default useLocalStorage
