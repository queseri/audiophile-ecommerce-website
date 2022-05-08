import React from 'react'
import MainPrimaryNavs from '../../../shared/MainPrimaryNavs'
import Products from './Products'

function Main() {  
    return (
        <main className='main'>

            <MainPrimaryNavs />
            
            <div className="products">
                <Products />
            </div>

        </main>
    )
}

export default Main