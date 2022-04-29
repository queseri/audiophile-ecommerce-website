import React, { useContext } from 'react'
//import { Link } from 'react-router-dom'
import { DataContext } from '../context/Context'

function Cart(props) {
  const { cart } = useContext(DataContext)
  console.log(cart)
  return (
    <div className={`cart ${props.open ? "show-cart" : ""}`}>
      <div className='cart-heading'>
        <h3>Cart</h3>
      </div>

      {cart.length === 0 ?
        <h4>the cart is empty</h4> :
        <ul className='cartList'>
          {cart && cart.map(item => <li key={item.id}>
            <img src={item.image} alt="" />

            <div className='cart-item-detail'>
              <h4>{item.productName}</h4>
              <span className='cart-item-cost'>
                {item.price}
              </span>
            </div>

            <div className='quantity-control'>
              <button className='btn btn-cart btn- minus'>-</button>
              <span className='quantity'>
                {item.qty}
              </span>
              <button className="btn btn-cart add">+</button>
            </div>

            <div className='cart-totals'>
              <p>TOTAL</p>
              <p>the total is</p>
            </div>

          </li>)}
        </ul>
      }
    </div>
  )
}

export default Cart