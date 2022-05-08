import React from 'react'

function CartSummary({ cart, totalAmount, shippingAmount, vatAmount, grandTotal, onSubmit }) {
    return (

        <div className='summary container'>

            <h3 className='summary-title'>Summary</h3>

            <ul className='checkout-cart-list cart-list'>
                {cart && cart.map(item => <li key={item.id}
                    className='cart-list-item'>

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
                            {item.productName.split(" ")[1] === "Mark" ? " M" : ""}
                            {item.productName.split(" ")[1] === "Mark" ? item.productName.split(" ")[2] : ""}
                        </h4>
                        <span className='cart-unit-cost'>
                            {item.price}
                        </span>
                    </div>

                    <div className='item-quantity'>
                        <p className='quantity'>{`x ${item.qty}`}</p>
                    </div>

                </li>)}
            </ul>

            <div className='display-totals'>

                <div className='net-totals totals'>
                    <span className='net-label'>Total</span>
                    <span className='net'>
                        {new Intl.NumberFormat('en-US',
                            { style: 'currency', currency: 'USD' }).format(totalAmount)}
                    </span>
                </div>

                <div className='shipping-totals totals'>
                    <span className='shipping-label'>Shipping</span>
                    <span className='shipping-amount'>
                        {new Intl.NumberFormat('en-US',
                            { style: 'currency', currency: 'USD' }).format(shippingAmount)}
                    </span>
                </div>

                <div className='vat-totals totals'>
                    <span className='vat-label'>Vat (Included)</span>
                    <span className='vat-amount'>
                        {new Intl.NumberFormat('en-US',
                            { style: 'currency', currency: 'USD' }).format(vatAmount)}
                    </span>
                </div>

                <div className='grand-totals totals'>
                    <span className='grand-label'>Grand Total</span>
                    <span className='grand-amount'>
                        {new Intl.NumberFormat('en-US',
                            { style: 'currency', currency: 'USD' }).format(grandTotal)}
                    </span>
                </div>

                <button type='submit'
                    className='pay-btn bg-orange text-white'
                    onClick={onSubmit} >
                    Continue and pay
                </button>
            </div>

        </div>

    )
}

export default CartSummary