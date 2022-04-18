import React from 'react'

function NavListBtn(props) {
    return (
        <li className="nav-list-item">
            <a className='nav-list-item-btn' href='/'>
                {props.name}
            </a>
        </li>
    )
}

export default NavListBtn