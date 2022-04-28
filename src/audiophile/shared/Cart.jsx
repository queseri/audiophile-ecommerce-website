import React, { useContext } from 'react'
import { DataContext } from '../context/Context'

function Cart(props) {
  const { cart } = useContext(DataContext)
  console.log(cart)
  return (
    <div className={`cart ${props.open ? "show-cart" : ""}`}>
      <h3>Cart</h3>
      {cart.length === 0 ?
        <h4>the cart is empty</h4> :
        <ul className='cartList'>
          {cart && cart.map(item => <li key={item.id}>
            <h4>{item.productName}</h4>
            <img src={item.image} alt="" />
          </li>)}
        </ul>
      }
    </div>
  )
}

export default Cart