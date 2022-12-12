import React, { useContext, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
//import { useNavigate } from 'react-router-dom'
import { DataContext } from '../context/Context'

function Cart(props) {
  const { cart, setCart, handleCart } = useContext(DataContext)

  const cartRef = useRef()
  useEffect(() => {
    if (props.open) {
      cartRef.current.focus()
    }

  })

  // calculate the total amount using the reduce method
  // the price amount is a string such as '$1,990.00' - it has to be changed to a number
  // use the replace method to replace the "$" and the ","

  const totalAmount = cart.reduce((total, item) => (total +
    (item.qty * item.price.replace("$", "").replace(",", ""))), 0)

  //const navigate = useNavigate()
  // console.log(navigate)

  const handleOneItemAddition = (id) => {
    // get the target object - where the id passed from the function
    // should be the same as id in the cart - use find method
    // when there is a match use destructuring to add one to the 
    // target object - that is the item that has been clicked
    const targetObj = cart.find(item => item.id === id)

    if (targetObj) {
      setCart(() => cart.map(item => item.id === id ? { ...item, qty: item.qty + 1 } : item))
    }

  }

  const handleOneItemSubtraction = (id) => {
    // get the target object - where the id passed from the function
    // should be the same as id in the cart - use find method
    // when there is a match use destructuring to subtract one to the 
    // target object - that is the item that has been clicked
    const targetObj = cart.find(item => item.id === id)
    // the lowest amount has to be one for any item in the cart
    // if the minus is clicked when item is one so that the quantity is zero
    // that cart item should be removed from the cart. A confirm message is sent first
    if (targetObj.qty <= 1) {
      return window.confirm('Do you want to remove the item from the cart?') &&
        setCart(cart.filter(item => item.id !== id))
    }

    if (targetObj) {
      setCart(() => cart.map(item => item.id === id ? { ...item, qty: item.qty - 1 } : item))
    }

  }

  const handleRemoveAll = (evt) => {
    console.log(evt.target)
    setCart(() => [])
  }

  return (
    <div className={`cart border-radius ${props.open ? "show-cart" : ""}`}
      tabIndex="-1"
      ref={cartRef}>

      {cart.length === 0 ?
        <div className='cart-main-empty'>
          <h3 className='cart-title'>the cart is empty</h3>

          <button className='bg-orange text-white btn-checkout'
            onClick={handleCart}>
            Close Cart
          </button>

        </div>

        :

        <div className='cart-main'>
          <div className='cart-heading'>

            <h3 className='cart-title'>Cart ({cart.length})</h3>

            <button className='remove-all'
              onClick={handleRemoveAll}>
              Remove all
            </button>

          </div>

          <ul className='cart-list'>
            {cart && cart.map(item => <li key={item.id} className='cart-list-item'>

              <div className='cart-img-container border-radius'>
                <img className='cart-item-img'
                  src={item.image}
                  alt="" />
              </div>

              <div className='cart-item-detail'>
                {/* the product name is a long string that needs to be shortened in the cart
                section. Using the split method to get the name for all the products, but
                for the Mark I and Mark II further split to get the M and the I or II                
                */}
                <h4 className='cart-item-title'>
                  {item.productName.split(" ")[0]}
                  {item.productName.split(" ")[1] === "Mark" ? " MK" : ""}
                  {item.productName.split(" ")[1] === "Mark" ? item.productName.split(" ")[2] : ""}
                </h4>

                <span className='cart-unit-cost'>
                  {item.price}
                </span>
              </div>

              <div className='quantity-control'>
                <button className='btn btn-cart btn- minus'
                  onClick={() => handleOneItemSubtraction(item.id)}>-
                  <span className="sr-only">subtract</span>
                </button>

                <span className={`quantity quantity${item.id}`} aria-live='polite'>
                  {item.qty}
                </span>

                <button className='btn btn-cart add'
                  onClick={() => handleOneItemAddition(item.id)}>+</button>
              </div>

            </li>)}
          </ul>


          <div className='cart-totals'>
            <p className='total-label'>Total</p>
            <p className='total-amount' aria-live='polite'>
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