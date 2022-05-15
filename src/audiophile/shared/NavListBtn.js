import React from 'react'
import { Link } from 'react-router-dom'

function NavListBtn(props) {
    return (
        <li className="nav-list-item" role="presentation">

            <Link to={`${props.address}`}
                role={props.roleItem}
                className='nav-list-item-btn'
                onClick={props.onclick}>
                {props.name}
            </Link>

        </li>
    )
}

export default NavListBtn