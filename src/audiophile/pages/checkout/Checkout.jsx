import React, { useState, useContext, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../../context/Context'
import CashPayment from '../../../assets/shared/mobile/payment.svg'
import CartSummary from './CartSummary'
import Confirmation from './Confirmation'

function Checkout() {

  const { cart } = useContext(DataContext)
  const checkoutRef = useRef()
  const shippingAmount = 50
  const vat = 0.2
  //const numItemsInCart = cart.reduce((total, item) => total + item.qty, 0)
  const totalAmount = cart.reduce((total, item) => (total +
    (item.qty * item.price.replace("$", "").replace(",", ""))), 0)
  const vatAmount = vat * totalAmount
  const grandTotal = vatAmount + totalAmount + shippingAmount
  //console.log(totalAmount)
  const initialState = {
    name: '',
    email: '',
    phone: '',
    address: '',
    zipCode: '',
    city: '',
    country: '',
    payment: 'emoney',
    touched: {
      name: false,
      email: false,
      phone: false,
      address: false,
      zipCode: false,
      city: false,
      country: false,
    },
  }

  const [formData, setFormData] = useState(initialState)
  const [proceedToPay, setProceedToPay] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const { name, email, phone, address, zipCode, city,
    country, payment, emoneyNum, emoneyPin
  } = formData

  const onSubmit = (evt) => {
    evt.preventDefault()
   // validate()
    console.log(errors)
   //  document.body.classList.add('body-hide-overflow')
    // setProceedToPay(true)
     console.log(formData)
  }

  const onBlur = (e) => {
    console.log(e)
    const { name } = e.target
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }

  const handleBack = () => {
    document.body.classList.remove('body-hide-overflow')
    setProceedToPay(false)
  }

  const validate = (evt) => {
    const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // Object to collect error feedback and to display on the form
    const errors = {
      name,
      email,
      phone,
      address,
      zipCode,
      city,
      country,
      payment,
      emoneyNum,
      emoneyPin,
    }

    //validate name
    if ((formData.touched.name && formData.name.length <= 0) ||
      (formData.touched.name && formData.touched.name.length > 30)) {
      errors.name = 'First name must be between 3 and 30'
    }

    //validate email
    if ((formData.touched.email && formData.email.length <= 0)) {
      errors.email = 'Email cannot be empty'
    }

    if ((formData.touched.email && !formData.email.match(validEmail))) {
      errors.email = 'Please use a valid email address'
    }

    //validate phone
    if ((formData.touched.phone && formData.phone.length <= 5) ||
      (formData.touched.phone && formData.phone.length > 50)) {
      errors.phone = 'Phone number must not be empty'
    }

    //validate address
    if (
      (formData.touched.address && formData.address.length < 10) ||
      (formData.touched.address && formData.address.length > 60)
    ) {
      errors.address = 'Address must be between 10 and 60'
    }

    //validate zipCode
    if (
      (formData.touched.zipCode && formData.zipCode.length < 3) ||
      (formData.touched.zipCode && formData.zipCode.length > 8)
    ) {
      errors.zipCode = 'zip code must be between 3 and 8'
    }

    //validate city
    if (
      (formData.touched.city && formData.city.length < 3) ||
      (formData.touched.city && formData.city.length > 50)
    ) {
      errors.city = 'City must be between 3 and 50'
    }

    if (
      (formData.touched.country && formData.country.length < 3) ||
      (formData.touched.country && formData.country.length > 50)
    ) {
      errors.country = 'City must be between 3 and 50'
    }


    return errors
  }

  const errors = validate()
  // console.log(errors)
  useEffect(() => {
    if (proceedToPay) {
      window.scrollTo(0, 0);
    }
  }, [proceedToPay])

  useEffect(() => {
    checkoutRef.current.focus()
  })

  return (
    <main className='main container  checkout-page' ref={checkoutRef}>
      <div className="checkout-overlay"></div>
      <div className='main-checkout-wrapper'>
        <div className='return checkout-return'>
          <Link className='btn btn-return' to="/">Go back</Link>
          <h1 className='sr-only'>Audiophile entertainment products</h1>
        </div>

        <div className='container checkout border-radius'>

          <h2 className='checkout-title' >Checkout</h2>

          <form className='form' onSubmit={onSubmit} >
            {/* Billing information - start */}
            <fieldset className='billing form-group'>
              <legend className='checkout-headers text-orange'>Billing details</legend>
              <div className='form-inputs-wrapper'>
                <div className='customer-name form-input-container'>
                  <label htmlFor="name">Name</label>
                  <input type="text"
                    name="name"
                    id="name"
                    placeholder="Alex Ward"
                    autoComplete='name'
                    onChange={onChange}
                    value={name}                 
                    required="true"
                    onBlur={onBlur}
                    className='form-input  border-radius'
                  />

                  <br />
                  {errors.name && <small className="error__alert">{errors.name}</small>}
                </div>

                <div className='customer-email form-input-container'>
                  <label htmlFor="email">Email</label>
                  <input type="email"
                    name="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    autoComplete='email'
                    onChange={onChange}
                    value={email}
                    aria-required="true"
                    onBlur={onBlur}
                    className='form-input border-radius'
                  />
                  <br />
                  {errors.email && <small className="error__alert">{errors.email}</small>}
                </div>

                <div className='customer-phone form-input-container'>
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel"
                    name="phone"
                    id="phone"
                    placeholder="+27832678210"
                    autoComplete='tel'
                    onChange={onChange}
                    value={phone}
                    aria-required="true"
                    onBlur={onBlur}
                    className='form-input border-radius'
                  />
                  <br />
                  {errors.phone && <small className="error__alert">{errors.phone}</small>}
                </div>
              </div>
            </fieldset>
            {/* Billing information - end */}

            {/* Shipping information - start */}
            <fieldset className='shipping form-group'>
              <legend className='checkout-headers text-orange'>Shipping info</legend>
              <div className='form-inputs-wrapper'>
                <div className='shipping-address form-input-container'>
                  <label htmlFor="address">Your address</label>
                  <input type="text"
                    name="address"
                    id="address"
                    placeholder="1137 Williams Avenue"
                    autoComplete='street-address'
                    onChange={onChange}
                    value={address}
                    className='form-input border-radius'
                    aria-required="true"
                    onBlur={onBlur}
                  />
                  <br />
                  {errors.address && <small className="error__alert">{errors.address}</small>}
                </div>

                <div className='shipping-zip-code form-input-container'>
                  <label htmlFor="zip-code">ZIP code</label>
                  <input type="text"
                    name="zipCode"
                    id="zip-code"
                    placeholder='10001'
                    autoComplete='postal-code'
                    onChange={onChange}
                    value={zipCode}
                    className='form-input border-radius'
                    aria-required="true"
                    onBlur={onBlur}
                  />
                  <br />
                  {errors.zipCode && <small className="error__alert">{errors.zipCode}</small>}
                </div>

                <div className='city form-input-container'>
                  <label htmlFor="city">City</label>
                  <input type="text"
                    name="city"
                    id="city"
                    placeholder='New York'
                    autoComplete='city'
                    onChange={onChange}
                    value={city}
                    className='form-input border-radius'
                    aria-required="true"
                    onBlur={onBlur}
                  />
                  <br />
                  {errors.city && <small className="error__alert">{errors.city}</small>}
                </div>

                <div className='country form-input-container'>
                  <label htmlFor="country">country</label>
                  <input type="text"
                    name="country"
                    id="country"
                    placeholder='United States'
                    autoComplete='country'
                    onChange={onChange}
                    value={country}
                    className='form-input border-radius'
                    aria-required="true"
                    onBlur={onBlur}
                  />
                  <br />
                  {errors.country && <small className="error__alert">{errors.country}</small>}
                </div>
              </div>
            </fieldset>
            {/* Shipping information - end */}

            {/* Payment information - start */}
            <fieldset className='payments form-group'>

              <legend className='checkout-headers payment-option-header text-orange'>Payment details</legend>
              <h3 className='payment-title'>Payment method</h3>
              <div className='form-inputs-wrapper payment-method'>

                <div className="payment-option form-input-container-radio border-radius">
                  <input type="radio"
                    name="payment"
                    id="e-money-option"
                    checked={payment === "emoney"}
                    onChange={onChange}
                    value="emoney"
                    className='form-input'
                  />
                  <label htmlFor="e-money-option">e-Money</label>
                </div>

                <div className='payment-option form-input-container-radio  border-radius'>
                  <input type="radio"
                    name="payment"
                    id="cash"
                    checked={payment === "cash"}
                    onChange={onChange}
                    value="cash"
                    className='form-input'
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>

              </div>
            </fieldset>
            {/* Payment information - end */}

            {/* Payment methods - start */}
            <fieldset className='payment-methods'>
              <div className={`cash-payments ${payment !== "emoney" ? "" : "hide-card-details"}`}>
                <img src={CashPayment} alt="" />
                <p className='cash-on-delivery'>
                  The 'Cash on Delivery' option enables you to pay in cash when our delivery courier arrives
                  at your residence. Just make sure your address is correct so that your order will not be cancelled.
                </p>
              </div>

              <div className={`card-payments form-group ${payment !== "emoney" ? "hide-card-details" : ""}`}>
                <div className='emoney-payment'>
                  <div className='emoney-payment-number form-input-container'>
                    <label htmlFor="emoney-card-number">e-Money Number</label>
                    <input type="text"
                      name="cardNumber"
                      id="emoney-card-number"
                      placeholder='238521993'
                      onChange={onChange}
                      value={emoneyNum}
                      className='form-input border-radius'
                      onBlur={onBlur}
                    />
                  </div>
                  <div className='emoney-payment-number form-input-container'>
                    <label htmlFor="emoney-card-pin">e-Money Pin</label>
                    <input type="text"
                      name="pin"
                      id="emoney-card-pin"
                      placeholder='6891'
                      onChange={onChange}
                      value={emoneyPin}
                      className='form-input border-radius'
                    />
                  </div>
                </div>
              </div>

            </fieldset>
            {/* Payment methods - end */}
          </form>
        </div>
      </div>

      <CartSummary cart={cart} totalAmount={totalAmount}
        shippingAmount={shippingAmount} vatAmount={vatAmount}
        grandTotal={grandTotal} onSubmit={onSubmit} />

      <Confirmation proceedToPay={proceedToPay} cart={cart}
        grandTotal={grandTotal} handleBack={handleBack} />

    </main>
  )
}

export default Checkout