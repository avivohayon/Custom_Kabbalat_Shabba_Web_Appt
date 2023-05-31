import React from 'react'
import { useImageCart } from '../Context/ImageCartContext'
import { GeneratePDF } from '../Components'

const CartToPdf = () => {
    const {cartItems} = useImageCart()
    console.log(`cart items: ${cartItems}`)
    console.log(cartItems.map((item) => (item.imageUrl )))



  return (
    <div>CartToPdf</div>
  )
}

export default CartToPdf