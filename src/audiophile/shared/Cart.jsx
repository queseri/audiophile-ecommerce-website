import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Context'

function Cart(props) {
  const { cart, setCart, handleCart } = useContext(DataContext)
  // const numItemsInCart = cart.reduce((total, item) => total + item.qty, 0)
  const totalAmount = cart.reduce((total, item) => (total +
    (item.qty * item.price.replace("$", "").replace(",", ""))), 0)
  console.log(totalAmount)
  const navigate = useNavigate()

  console.log(navigate)

  const handleOneItemAddition = (id) => {
    const targetObj = cart.find(item => item.id === id)

    if (targetObj) {
      setCart(() => cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
    }
    
  }

  const handleOneItemSubtraction = (id) => {
    const targetObj = cart.find(item => item.id === id)
    if (targetObj.qty <= 0) return
    if (targetObj) {
      setCart(() => cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item))
    }
   
  }

  return (
    <div className={`cart border-radius ${props.open ? "show-cart" : ""}`}>

      {cart.length === 0 ?
        <div className='cart-main-empty'>
           <h3 className='cart-title'>the cart is empty</h3>
          <button className='bg-orange text-white btn-checkout'
            onClick={handleCart}>
            Close Cart
          </button>
        </div> :
        <div className='cart-main'>

          <div className='cart-heading'>
            <h3 className='cart-title'>Cart</h3>
            <button className='remove-all'>Remove all</button>
          </div>

          <ul className='cart-list'>
            {cart && cart.map(item => <li key={item.id} className='cart-list-item'>

              <div className='cart-img-container border-radius'>
                <img className='cart-item-img' src={item.image} alt="" />
              </div>

              <div className='cart-item-detail'>
                <h4 className='cart-item-title'>{item.productName.split(" ")[0]}</h4>
                <span className='cart-unit-cost'>
                  {item.price}
                </span>
              </div>

              <div className='quantity-control'>
                <button className='btn btn-cart btn- minus'
                  onClick={() => handleOneItemSubtraction(item.id)}>-</button>

                <span className={`quantity quantity${item.id}`}>
                  {item.qty}
                </span>

                <button className='btn btn-cart add'
                  onClick={() => handleOneItemAddition(item.id)}>+</button>
              </div>

            </li>)}
          </ul>


          <div className='cart-totals'>
            <p className='total-label'>Total</p>
            <p className='total-amount'>
              {new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }).format(totalAmount)}
            </p>
          </div>

          <Link to="./checkout"
            className={`bg-orange text-white btn-checkout`}
            onClick={handleCart}>
            Checkout
          </Link>
        </div>
      }
    </div>
  )
}

export default Cart