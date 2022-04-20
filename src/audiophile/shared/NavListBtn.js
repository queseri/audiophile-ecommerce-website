import React from 'react'
import { Link } from 'react-router-dom'

function NavListBtn(props) {
    return (
        <li className="nav-list-item">
            <Link to={`${props.address}`} className='nav-list-item-btn'>
                {props.name}
            </Link>
        </li>
    )
}

export default NavListBtn