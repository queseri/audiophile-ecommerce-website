import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Checkout() {

  const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    tel: '',
    payment: '',
    touched: {
      firstName: false,
      lastName: false,
    },
  }

  const [formData, setFormData] = useState(initialState)

  const onChange = (e) => {

    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const {
    name,
    email,
    phone,
    address,
    zipCode,
    city,
    country,
    payment,
    emoneyNum,
    emoneyPin
  } = formData

  return (
    <main>
      <div className='return'>
        <Link className='btn btn-return' to="/">Go back</Link>
        <h1 className='sr-only'>Audiophile entertainment products</h1>
      </div>
      <div className='checkout'>
        <h2 className='checkout-title'>Checkout</h2>
        <form>
          <fieldset className='billing'>
            <legend>Billing details</legend>
            <div className='customer-name'>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name"
                placeholder="Alex Ward" autoComplete='name'
                onChange={onChange} value={name} />
            </div>
            <div className='customer-email'>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email"
                placeholder="alexei@mail.com" autoComplete='email'
                onChange={onChange} value={email} />
            </div>
            <div className='customer-phone'>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" id="phone"
                placeholder="+27832678210" autoComplete='tel'
                onChange={onChange} value={phone} />
            </div>
          </fieldset>

          <fieldset className='shipping'>
            <legend>Shipping info</legend>
            <div className='shipping-address'>
              <label htmlFor="address">Your address</label>
              <input type="text" name="" id="address"
                placeholder="1137 Williams Avenue" autoComplete='street-address'
                onChange={onChange} value={address} />
            </div>
            <div className='shipping-address'>
              <label htmlFor="zip-code">ZIP code</label>
              <input type="text" name="" id="zip-code"
                placeholder='10001' autoComplete='postal-code'
                onChange={onChange} value={zipCode} />
            </div>
            <div className='city'>
              <label htmlFor="city">City</label>
              <input type="text" name="" id="city" placeholder='New York' autoComplete='city'
                onChange={onChange} value={city} />
            </div>
            <div className='country'>
              <label htmlFor="country">country</label>
              <input type="text" name="" id="country" placeholder='United States' autoComplete='country'
                onChange={onChange} value={country} />
            </div>
          </fieldset>

          <fieldset className='payments'>
            <legend>Payment details</legend>
            <div className='payment-method'>
              <div className="payment-option">
                <input type="radio" name="payment" id="e-money-option"
                  checked={payment === "emoney"} onChange={onChange} value="emoney" />
                <label htmlFor="e-money-option">e-Money</label>
              </div>

              <div className='payment-option'>
                <input type="radio" name="payment" id="cash"
                  checked={payment === "cash"} onChange={onChange} value="cash" />
                <label htmlFor="cash">Cash on delivery</label>
              </div>

              <div className='e-money-details'>
                <div className='e-money-number'>
                  <label htmlFor="e-money" className="e-money-number">e-Money number</label>
                  <input type="number" name="" id="e-money" onChange={onChange} />
                </div>

                <div className='e-money-pin'>
                  <label htmlFor="e-money-pin" className="e-money-number">Pin</label>
                  <input type="number" name="" id="e-money-pin" onChange={onChange} />
                </div>

                <div className='emoney-payment'>

                  <div className='emoney-payment-number'>
                    <label htmlFor="emoney-card-number">e-Money Number</label>
                    <input type="text" name="" id="emoney-card-number"
                      placeholder='238521993'
                      onChange={onChange} value={emoneyNum} />
                  </div>
                  <div className='emoney-payment-number'>
                    <label htmlFor="emoney-card-pin">e-Money Pin</label>
                    <input type="text" name="" id="emoney-card-pin"
                      placeholder='6891'
                      onChange={onChange} value={emoneyPin} />
                  </div>

                </div>
              </div>
            </div>

          </fieldset>
        </form>
      </div>

    </main>
  )
}

export default Checkout