import React, { useContext } from 'react'
import MainPrimaryNavs from '../../../shared/MainPrimaryNavs'
import { DataContext } from '../../../context/Context'

function MainHeadPhones() {
    const data = useContext(DataContext)
    console.log(data)
    return (
        <div className='main'>
            <MainPrimaryNavs />
        </div>
    )
}

export default MainHeadPhones