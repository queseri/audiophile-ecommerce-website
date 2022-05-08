import React from 'react'
import { Link } from 'react-router-dom'
import Mark from '../../../assets/shared/desktop/Mark.svg'

function Confirmation(props) {
    return (
        < div className={`overlay ${props.proceedToPay ? "show-final-order" : ""} `}>

            <div className={`final-order container border-radius`}>

                <div className='check-mark-wrapper'>
                    <img className='check-mark-wrapper-img'
                        src={Mark}
                        alt="" />
                </div>

                <h3 className='final-order-title'>
                    Thank you for your order
                </h3>

                <p className='thank-you-note'>                  
                    You will receive an email confirmation shortly.
                </p>

                <div className='thank-you-card border-radius'>

                    {props.cart.length >= 1 ?
                        <div className='card-sect1-container'>

                            <div className='card-sect1'>

                                <div className='cart-img-container border-radius'>
                                    <img className='cart-item-img'
                                        src={props.cart[0].image}
                                        alt="" />
                                </div>

                                <div className='cart-item-detail'>

                                    <h4 className='cart-item-title'>
                                        {props.cart[0].productName.split(" ")[0]}
                                        {props.cart[0].productName.split(" ")[1] === "Mark" ? " M" : ""}
                                        {props.cart[0].productName.split(" ")[1] === "Mark" ?
                                            props.cart[0].productName.split(" ")[2] :
                                            ""}
                                    </h4>

                                    <span className='cart-unit-cost'>
                                        {props.cart[0].price}
                                    </span>

                                </div>

                                <div className='item-quantity'>
                                    <p className='quantity'>
                                        {`x ${props.cart[0].qty}`}
                                    </p>
                                </div>

                            </div>

                            {props.cart.length > 1 ?
                                <p className='cart-extra-content'>
                                    {`and ${props.cart.length - 1} other item(s)`}
                                </p> : ""
                            }
                        </div>
                        : ""}
                    <div className='card-sect2-container'>

                        <h4 className='grand-total-title'>
                            Grand Total
                        </h4>

                        <span className='grand-amount'>
                            {new Intl.NumberFormat('en-US',
                                { style: 'currency', currency: 'USD' }).format(props.grandTotal)}
                        </span>

                    </div>
                </div>

                <Link className='btn btn-modal' to="/"
                    onClick={props.handleBack}>
                    Back to home
                </Link>

            </div>
        </div >


    )
}

export default Confirmation