import React, { useContext } from 'react'
//import { useLocation } from 'react-router-dom'
import ButtonView from './ButtonView'
import { DataContext } from '../context/Context'
import DecorativeImages from './DecorativeImages'

function ProductsShared(props) {
    // const [currentProduct, setCurrentProduct] = useState(null)
    const details = props.details ? "product-detail" : ""
    const { handleAdd, handleMinus, quantity, addToCart } = useContext(DataContext)
    // const { pathname } = useLocation()

    return (
        <div className={`shared-products container ${details}`}>
            <div className='shared-products-image-container border-radius'>
                <DecorativeImages desktop={props.desktop} tablet={props.tablet} mobile={props.mobile} />

            </div>
            <div className='shared-products-content'>
                <h2 className='product-title text-orange'>New product</h2>
                <h3 className='product-title-secondary'>{props.name}</h3>
                <p className='shared-product-text'>{props.description}</p>
                <ButtonView name={props.name} address={props.address} hide={props.hide} />

                {props.details ?
                    <div className='add-to-cart'>
                        <p className='product-cost'>{props.currency}</p>

                        <div className='cart-divider'>
                            <div className='quantity-control'>
                                <button className='btn btn-cart btn- minus' onClick={handleMinus}>
                                    -<span className="sr-only">subtract</span>
                                </button>
                                <span className='quantity' aria-live='polite'>
                                    {quantity}
                                </span>
                                <button className="btn btn-cart add" onClick={handleAdd}>+</button>
                            </div>

                            <button className='btns btn-add-to-cart'
                                onClick={() => addToCart(props.address, props.name, props.currency)}>Add to cart</button>

                        </div>

                    </div>
                    : ""
                }
            </div>
        </div>
    )
}

export default ProductsShared