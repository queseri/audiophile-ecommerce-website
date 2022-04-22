import React, { useContext } from 'react'
import MainPrimaryNavs from '../../../shared/MainPrimaryNavs'
import { DataContext } from '../../../context/Context'
import ProductsShared from '../../../shared/ProductsShared'

function MainHeadPhones() {
    const data = useContext(DataContext)
    const targetData = data.products.filter(item => item.category === "headphones")
    const sortProducts = targetData.sort((itemA, itemB) => itemA.slug < itemB.slug)

    console.log(sortProducts)
    return (
        <div className='main'>
            {/*Feature products*/}
            {sortProducts.map(product => <ProductsShared key={product.id}
                desktop={product.categoryImage.desktop}
                tablet={product.categoryImage.tablet}
                mobile={product.categoryImage.mobile}
                name={product.name}
                description={product.description}
            />)}

            <MainPrimaryNavs />
        </div>
    )
}

export default MainHeadPhones