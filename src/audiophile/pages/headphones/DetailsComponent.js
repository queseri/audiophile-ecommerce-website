import React, { useContext } from 'react'
import { useParams, useLocation, Link } from "react-router-dom"
import { DataContext } from '../../context/Context'
import ProductsShared from '../../shared/ProductsShared'
import DecorativeImages from '../../shared/DecorativeImages'
import ButtonView from '../../shared/ButtonView'
// import { useParams, useNavigate, Link } from "react-router-dom"

function DetailsComponent() {
  const data = useContext(DataContext)
  const { id } = useParams()
  const location = useLocation()
  const pathname = location.pathname.split("/")
  const shortpath = `/${pathname[1]}/`
  //const 
  console.log(shortpath)

  //const getProduct = data.products.find(product => parseInt(id) === product.id)
  const getProduct = data.products.find(product => id === product.slug)
  const features = getProduct.features.split("\n\n") // split paragraphs

  // decorative images section
  const decoratives = getProduct.gallery
  const otherProducts = getProduct.others

  console.log(getProduct)
  console.log(data)
  console.log(otherProducts)
  console.log(decoratives)
  return (
    <main className='main'>
      <div className='return'>
        <Link className='btn btn-return' to="/">Go back</Link>
      </div>

      <ProductsShared key={getProduct.id}
        desktop={`../.${getProduct.image.desktop}`}
        tablet={`../.${getProduct.image.tablet}`}
        mobile={`../.${getProduct.image.mobile}`}
        name={getProduct.name}
        description={getProduct.description}
        address={getProduct.id}
        hide={true}
        details={true}
        currency={new Intl.NumberFormat('en-US',
          { style: 'currency', currency: 'USD' }).format(getProduct.price)}
      />


      <div className='features container'>
        <h3 className='features-title'>Features</h3>
        {features.map((feature, idx) => <p key={idx}
          className={`features-content feature-content${idx}`}>{feature}</p>)}
      </div>

      <div className='extras container'>
        <h4 className='extra-title'>In the box</h4>
        <ul className='extras-list'>
          {getProduct.includes.map(item => <li key={item.item} className='extra-list-item'>
            <span className='item-quantity text-orange'>{item.quantity}x</span>
            <span className='item-description'>{item.item}</span>
          </li>)}
        </ul>
      </div>

      <div className='decorative container'>
        <div className='decorative-image-list'>

          <DecorativeImages
            desktop={`../.${decoratives.first.desktop}`}
            tablet={`../.${decoratives.first.tablet}`}
            mobile={`../.${decoratives.first.mobile}`}
          />


          <DecorativeImages
            desktop={`../.${decoratives.second.desktop}`}
            tablet={`../.${decoratives.second.tablet}`}
            mobile={`../.${decoratives.second.mobile}`}
          />


          <DecorativeImages
            desktop={`../.${decoratives.third.desktop}`}
            tablet={`../.${decoratives.third.tablet}`}
            mobile={`../.${decoratives.third.mobile}`}
          />

        </div>
      </div>

      <div className='other-products container'>
        <h3 className='other-products-title'>
          You may also like
        </h3>
        <ul className='other-products-list'>
          {otherProducts.map((product, idx) => <li key={product.slug}
            className={`other-product-list-item other-product-list-item${idx}`}>
            <DecorativeImages
              desktop={`../.${product.image.desktop}`}
              tablet={`../.${product.image.tablet}`}
              mobile={`../.${product.image.mobile}`}
            />
            <h4 className='other-product-item-title'>{product.name}</h4>
            <ButtonView name={product.name} address={`${shortpath}${product.slug}`} />
          </li>)}

        </ul>
      </div>
    </main>
  )
}

export default DetailsComponent