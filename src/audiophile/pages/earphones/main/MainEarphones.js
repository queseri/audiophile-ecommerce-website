import React, { useContext } from 'react'
import { DataContext } from '../../../context/Context'
import ProductsShared from '../../../shared/ProductsShared'
import MainPrimaryNavs from '../../../shared/MainPrimaryNavs'

function MainEarphones() {

    const data = useContext(DataContext)
    const targetData = data.products.filter(item => item.category === "earphones")
    const sortProducts = targetData.sort((itemA, itemB) => itemA.slug < itemB.slug)
   // console.log(data)
   // console.log(sortProducts)

    return (
        <main className='main'>

            <div className='main-products-container'>                
                {/*Feature products*/}
                {sortProducts.map(product => <ProductsShared key={product.id}
                    desktop={product.categoryImage.desktop}
                    tablet={product.categoryImage.tablet}
                    mobile={product.categoryImage.mobile}
                    name={product.name}
                    description={product.description}
                    address={product.slug}
                />)}
            </div>

            <MainPrimaryNavs />

        </main>
    )
}

export default MainEarphones