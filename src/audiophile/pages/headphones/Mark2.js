import React, { useContext } from 'react'
import { useParams } from "react-router-dom"
import { DataContext } from '../../context/Context'
import ProductsShared from '../../shared/ProductsShared'
// import { useParams, useNavigate, Link } from "react-router-dom"

function Mark2() {
  const data = useContext(DataContext)
  const { id } = useParams()
  //  const navigate = useNavigate()
  const getProduct = data.products.find(product => parseInt(id) === product.id)
  const features = getProduct.features.split("\n\n")

  console.log(id)
  console.log(getProduct)
  return (
    <main>
      <a href="/">Go back</a>
      <ProductsShared key={getProduct.id}
        desktop={`../.${getProduct.image.desktop}`}
        tablet={`../.${getProduct.image.tablet}`}
        mobile={`../.${getProduct.image.mobile}`}
        name={getProduct.name}
        description={getProduct.description}
        address={getProduct.id}
        hide={true}
      />

      <div className='add-to-cart'>
        <p>{getProduct.price}</p>
        <div className='quantity-control'>
          <button className='btn minus'>-</button>
          <span className='quantity'>0</span>
          <button className="btn add">+</button>
        </div>
        <button className='btn btn-add-to-cart'>Add to cart</button>
      </div>

      <div className='features'>
        <h3 className='features-title'>Features</h3>
        {features.map((feature, idx) => <p key={idx}
          className={`features-content feature-content${idx}`}>{feature}</p>)}
      </div>

      <div className='extras'>
        <h4 className='extra-title'>In the box</h4>
        <ul className='extras-list'>
          {getProduct.includes.map(item => <li key={item.item}>
            <span className='item-quantity'>{item.quantity}x</span>
            <span className='item-description'>{item.item}</span>
          </li>)}
        </ul>
      </div>
    </main>
  )
}

export default Mark2