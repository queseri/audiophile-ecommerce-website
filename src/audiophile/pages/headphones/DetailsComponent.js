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


  console.log(data)
  console.log(otherProducts)
  console.log(decoratives)
  return (
    <main>
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

      <div className='decorative'>
        <ul className='decorative-image-list'>
          <li className='decorative-image-list-item'>
            <DecorativeImages
              desktop={`../.${decoratives.first.desktop}`}
              tablet={`../.${decoratives.first.tablet}`}
              mobile={`../.${decoratives.first.mobile}`}
            />
          </li>
          <li className='decorative-image-list-item'>
            <DecorativeImages
              desktop={`../.${decoratives.second.desktop}`}
              tablet={`../.${decoratives.second.tablet}`}
              mobile={`../.${decoratives.second.mobile}`}
            />
          </li>
          <li className='decorative-image-list-item'>
            <DecorativeImages
              desktop={`../.${decoratives.third.desktop}`}
              tablet={`../.${decoratives.third.tablet}`}
              mobile={`../.${decoratives.third.mobile}`}
            />
          </li>
        </ul>
      </div>

      <div className='other-products'>
        <h3 className='other-products-title'>
          You may also like
        </h3>
        <ul className='other-products-list'>
          {otherProducts.map(product => <li key={product.slug} className='other-product-list-item'>
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