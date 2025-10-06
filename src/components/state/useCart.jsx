import { useContext } from 'react'
import { CartContext } from './CartProvider.jsx'
export const useCart = () => useContext(CartContext)
