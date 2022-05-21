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
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
    cardNumber: "",
    pin: "",
    touched: {
      name: false,
      email: false,
      phone: false,
      address: false,
      zipCode: false,
      city: false,
      country: false,
      cardNumber: false,
      pin: false
    },
  }

  const [formData, setFormData] = useState(initialState)
  const [proceedToPay, setProceedToPay] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const { name, email, phone, address, zipCode, city,
    country, payment, cardNumber, pin
  } = formData

  const onSubmit = (evt) => {
    evt.preventDefault()

    // Object to collect error feedback and to display on the form
    const errors = {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      payment: '',
      cardNumber: '',
      pin: '',
    }

    if (cart.length === 0) {
      return window.alert("The Cart is empty, Add items to cart first")
    }


    // validate()
    console.log(errors)
    if (formData.name.trim("") === "" ||
      formData.name.trim("").length < 1 ||
      formData.name.trim("").length > 50) {
      document.getElementById("name").focus()
      // console.log(document.getElementById("name").closest("small"))
      return
    }

    if (formData.email === "" ||
      formData.email.trim("").length < 5 ||
      formData.email.trim("").length > 50) {
      document.getElementById("email").focus()
      return
    }

    if (!formData.email.match(validEmail)) {
      document.getElementById("email").focus()
      return
    }

    //validate phone
    if (formData.phone === "" ||
      formData.phone.trim("").length < 5 ||
      formData.phone.trim("").length > 20) {
      document.getElementById("phone").focus()
      return
    }

    //validate address
    if (formData.address === "" ||
      formData.address.trim("").length < 5 ||
      formData.address.trim("").length > 60) {
      document.getElementById("address").focus()
      return
    }

    //validate zipCode
    if (formData.zipCode === "" ||
      formData.zipCode.trim("").length < 3 ||
      formData.zipCode.trim("").length > 8) {
      document.getElementById("zip-code").focus()
      return
    }

    //validate city
    if (formData.city === "" ||
      formData.city.trim("").length < 3 ||
      formData.city.trim("").length > 60) {
      document.getElementById("city").focus()
      return
    }

    //validate country
    if (formData.country === "" ||
      formData.country.trim("").length < 3 ||
      formData.country.trim("").length > 60) {
      document.getElementById("country").focus()
      return
    }

    //validate payment by card 
    if (formData.payment === "emoney") {
      if (formData.cardNumber === "" ||
        formData.cardNumber.trim("").length < 6 ||
        formData.cardNumber.trim("").length > 12) {
        document.getElementById("card-number").focus()
        return
      }

      if (formData.pin === "" ||
        formData.pin.trim("").length < 4 ||
        formData.pin.trim("").length > 8) {
        document.getElementById("card-pin").focus()
        return
      }
    }

    document.body.classList.add('body-hide-overflow')
    setProceedToPay(true)
  //  console.log(formData)
  }

  const onBlur = (e) => {
  //  console.log(e)
    const { name } = e.target
    setFormData({ ...formData, touched: { ...formData.touched, [name]: true } })
  }

  const handleBack = () => {
    document.body.classList.remove('body-hide-overflow')
    setProceedToPay(false)
  }

  const validate = () => {
    // Object to collect error feedback and to display on the form
    const errors = {
      name: '',
      email: '',
      phone: '',
      address: '',
      zipCode: '',
      city: '',
      country: '',
      payment: '',
      cardNumber: '',
      pin: '',
    }

    //validate name
    if ((formData.touched.name && formData.name.trim("").length < 1) ||
      (formData.touched.name && formData.name.trim("").length > 30)) {
      errors.name = 'Name must be between 1 and 30 characters in length'
    }

    //validate email
    if ((formData.touched.email && formData.email.trim("").length <= 5) ||
      (formData.touched.email && formData.email.trim("").length > 50)) {
      errors.email = 'Email must be between 5 and 50 characters'
    }

    if ((formData.touched.email && !formData.email.match(validEmail))) {
      errors.email = 'Please use a valid email address'
    }

    //validate phone
    if ((formData.touched.phone && formData.phone.length <= 5) ||
      (formData.touched.phone && formData.phone.length > 20)) {
      errors.phone = 'Phone number must not be empty'
    }

    //validate address
    if (
      (formData.touched.address && formData.address.length < 5) ||
      (formData.touched.address && formData.address.length > 60)
    ) {
      errors.address = 'Address must be between 10 and 60 characters in length'
    }

    //validate zipCode
    if (
      (formData.touched.zipCode && formData.zipCode.length < 3) ||
      (formData.touched.zipCode && formData.zipCode.length > 8)
    ) {
      errors.zipCode = 'zip code must be between 3 and 8 characters in length'
    }

    //validate city
    if (
      (formData.touched.city && formData.city.length < 3) ||
      (formData.touched.city && formData.city.length > 50)
    ) {
      errors.city = 'City must be between 3 and 50 characters in length'
    }

    //validate country
    if (
      (formData.touched.country && formData.country.length < 3) ||
      (formData.touched.country && formData.country.length > 50)
    ) {
      errors.country = 'Country must be between 3 and 50 characters in length'
    }

    // validate card
    if (formData.payment === "emoney") {

      //validate card number
      if (
        (formData.touched.cardNumber && formData.cardNumber.length < 6) ||
        (formData.touched.cardNumber && formData.cardNumber.length > 12)
      ) {
        errors.cardNumber = 'Card number must be between 6 and 12 characters in length'
      }

      //validate card pin
      if (
        (formData.touched.pin && formData.pin.length < 4) ||
        (formData.touched.pin && formData.pin.length > 8)
      ) {
        errors.pin = 'Card pin must be between 4 and 8 characters in length'
      }
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

              <legend className='checkout-headers text-orange'>
                Billing details
              </legend>

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
                    min={1}
                    max={50}
                    required
                    aria-required={true}
                    onBlur={onBlur}
                    className='form-input  border-radius'
                    aria-describedby="error-name"
                  />

                  {errors.name && <small className={`error__alert`}
                    aria-live="polite"
                    id="error-name">{errors.name}</small>}

                </div>

                <div className='customer-email form-input-container'>
                  <label htmlFor="email">Email</label>
                  <input type="email"
                    name="email"
                    id="email"
                    placeholder="alexei@mail.com"
                    autoComplete="email"
                    onChange={onChange}
                    value={email}
                    min={5}
                    max={50}
                    required
                    onBlur={onBlur}
                    className="form-input border-radius"
                    aria-describedby="error-email"
                  />

                  {errors.email && <small id="error-email"
                    aria-live="polite"
                    className="error__alert">{errors.email}</small>}

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
                    min={5}
                    max={20}
                    required
                    onBlur={onBlur}
                    className="form-input border-radius"
                    aria-describedby="error-phone"
                  />

                  {errors.phone && <small id="error-phone"
                    aria-live="polite"
                    className="error__alert">{errors.phone}</small>}

                </div>

              </div>

            </fieldset>
            {/* Billing information - end */}

            {/* Shipping information - start */}
            <fieldset className='shipping form-group'>

              <legend className='checkout-headers text-orange'>
                Shipping info
              </legend>

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
                    min={5}
                    max={60}
                    className="form-input border-radius"
                    aria-describedby="error-address"
                    required
                    onBlur={onBlur}

                  />

                  {errors.address && <small id="error-address"
                    aria-live="polite"
                    className="error__alert">{errors.address}</small>}

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
                    min={3}
                    max={8}
                    className="form-input border-radius"
                    aria-describedby="error-zipcode"
                    required
                    onBlur={onBlur}
                  />

                  {errors.zipCode && <small id="error-zipcode"
                    aria-live="polite"
                    className="error__alert">
                    {errors.zipCode}
                  </small>}

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
                    min={3}
                    max={50}
                    className="form-input border-radius"
                    aria-describedby="error-city"
                    required
                    onBlur={onBlur}
                  />

                  {errors.city && <small id="error-city"
                    aria-live="polite"
                    className="error__alert">
                    {errors.city}
                  </small>}

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
                    min={3}
                    max={50}
                    className="form-input border-radius"
                    aria-describedby="error-country"
                    required
                    onBlur={onBlur}
                  />

                  {errors.country && <small id="error-country"
                    aria-live="polite"
                    className="error__alert">
                    {errors.country}
                  </small>}

                </div>

              </div>

            </fieldset>
            {/* Shipping information - end */}

            {/* Payment information - start */}
            <fieldset className='payments form-group'>

              <legend className='checkout-headers payment-option-header text-orange'>
                Payment details
              </legend>

              <h3 className='payment-title'>Payment method</h3>

              <div className='form-inputs-wrapper payment-method'>

                <div className="payment-option form-input-container-radio border-radius">

                  <input type="radio"
                    name="payment"
                    id="e-money-option"
                    checked={payment === "emoney"}
                    onChange={onChange}
                    value="emoney"
                    className="form-input"
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
                    className="form-input"
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

                    <input type="number"
                      name="cardNumber"
                      id="card-number"
                      placeholder='238521993'
                      onChange={onChange}
                      value={cardNumber}
                      required
                      min={6}
                      max={12}
                      className="form-input border-radius"
                      aria-describedby="error-card-number"
                      onBlur={onBlur}
                    />

                    {errors.cardNumber && <small id="error-card-number"
                      aria-live="polite"
                      className="error__alert">
                      {errors.cardNumber}
                    </small>}

                  </div>

                  <div className='emoney-payment-number form-input-container'>

                    <label htmlFor="emoney-card-pin">e-Money Pin</label>

                    <input type="number"
                      name="pin"
                      id="card-pin"
                      placeholder='6891'
                      onChange={onChange}
                      required
                      value={pin}
                      min={4}
                      max={8}
                      className="form-input border-radius"
                      aria-describedby="error-pin"
                      onBlur={onBlur}
                    />

                    {errors.pin && <small id="error-pin"
                      aria-live="polite"
                      className="error__alert">
                      {errors.pin}
                    </small>}

                  </div>

                </div>

              </div>

            </fieldset>
            {/* Payment methods - end */}
          </form>

        </div>

      </div>

      <CartSummary cart={cart}
        totalAmount={totalAmount}
        shippingAmount={shippingAmount}
        vatAmount={vatAmount}
        grandTotal={grandTotal}
        onSubmit={onSubmit} />

      <Confirmation proceedToPay={proceedToPay}
        cart={cart}
        grandTotal={grandTotal}
        handleBack={handleBack} />

    </main>
  )
}

export default Checkout