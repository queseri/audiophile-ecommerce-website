import React from 'react'
import MainPrimaryNavs from '../../../shared/MainPrimaryNavs'
import Products from './Products'
//import { DataContext } from '../../../context/Context'

function Main() {
  
  //  const data = useContext(DataContext)   
 //   const FilteredPrimaryNav = data.products.filter(item => item.category === "earphones" || item.category === "speakers")
   // const SortFilterPrimaryNav = FilteredPrimaryNav.sort((a, b) => b.id - a.id)
  //  console.log(SortFilterPrimaryNav)
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