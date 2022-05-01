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
    payment: 'emoney',
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
    <main className='main container  checkout-page'>

      <div className='return'>
        <Link className='btn btn-return' to="/">Go back</Link>
        <h1 className='sr-only'>Audiophile entertainment products</h1>
      </div>

      <div className='container checkout border-radius'>

        <h2 className='checkout-title'>Checkout</h2>

        <form className='form'>

          <fieldset className='billing form-group'>
            <legend className='checkout-headers text-orange'>Billing details</legend>
            <div className='form-inputs-wrapper'>
              <div className='customer-name form-input-container'>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name"
                  placeholder="Alex Ward" autoComplete='name'
                  onChange={onChange} value={name}
                  className='form-input  border-radius' />
              </div>

              <div className='customer-email form-input-container'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email"
                  placeholder="alexei@mail.com" autoComplete='email'
                  onChange={onChange} value={email}
                  className='form-input border-radius' />
              </div>

              <div className='customer-phone form-input-container'>
                <label htmlFor="phone">Phone Number</label>
                <input type="tel" name="phone" id="phone"
                  placeholder="+27832678210" autoComplete='tel'
                  onChange={onChange} value={phone}
                  className='form-input border-radius' />
              </div>
            </div>
          </fieldset>

          <fieldset className='shipping form-group'>
            <legend className='checkout-headers text-orange'>Shipping info</legend>
            <div className='form-inputs-wrapper'>
              <div className='shipping-address form-input-container'>
                <label htmlFor="address">Your address</label>
                <input type="text" name="" id="address"
                  placeholder="1137 Williams Avenue" autoComplete='street-address'
                  onChange={onChange} value={address}
                  className='form-input border-radius' />
              </div>

              <div className='shipping-zip-code form-input-container'>
                <label htmlFor="zip-code">ZIP code</label>
                <input type="text" name="zip-code" id="zip-code"
                  placeholder='10001' autoComplete='postal-code'
                  onChange={onChange} value={zipCode}
                  className='form-input border-radius' />
              </div>

              <div className='city form-input-container'>
                <label htmlFor="city">City</label>
                <input type="text" name="city" id="city" placeholder='New York' autoComplete='city'
                  onChange={onChange} value={city}
                  className='form-input border-radius' />
              </div>

              <div className='country form-input-container'>
                <label htmlFor="country">country</label>
                <input type="text" name="country" id="country" placeholder='United States' autoComplete='country'
                  onChange={onChange} value={country}
                  className='form-input border-radius' />
              </div>
            </div>
          </fieldset>

          <fieldset className='payments form-group'>

            <legend className='checkout-headers payment-option-header text-orange'>Payment details</legend>
            <h3 className='payment-title'>Payment method</h3>
            <div className='form-inputs-wrapper payment-method'>

              <div className="payment-option form-input-container-radio border-radius">
                <input type="radio" name="payment"
                  id="e-money-option" checked={payment === "emoney"}
                  onChange={onChange} value="emoney" className='form-input' />
                <label htmlFor="e-money-option">e-Money</label>
              </div>

              <div className='payment-option form-input-container-radio  border-radius'>
                <input type="radio" name="payment" id="cash"
                  checked={payment === "cash"} onChange={onChange}
                  value="cash" className='form-input' />
                <label htmlFor="cash">Cash on delivery</label>
              </div>

            </div>
          </fieldset>
          <fieldset className={`card-payments form-group ${payment !== "emoney" ? "hide-card-details" : ""}`}>
            <div className='emoney-payment'>
              <div className='emoney-payment-number form-input-container'>
                <label htmlFor="emoney-card-number">e-Money Number</label>
                <input type="text" name="" id="emoney-card-number"
                  placeholder='238521993'
                  onChange={onChange} value={emoneyNum}
                  className='form-input border-radius' />
              </div>

              <div className='emoney-payment-number form-input-container'>
                <label htmlFor="emoney-card-pin">e-Money Pin</label>
                <input type="text" name="" id="emoney-card-pin"
                  placeholder='6891'
                  onChange={onChange} value={emoneyPin} className='form-input border-radius' />
              </div>

            </div>
          </fieldset>
        </form>
      </div>

    </main>
  )
}

export default Checkout