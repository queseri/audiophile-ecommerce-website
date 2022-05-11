import React from 'react'
import { Link } from 'react-router-dom'

//shared
function PrimaryNav(props) {

    return (
        <li className="primary-nav-list-item">
            <img className="primary-nav-image"
                src={props.src}
               // width={props.width}
                // height={props.height}
                alt=""
                aria-hidden="true" />

            <h4 className='headphones primary-nav-heading'>{props.title}</h4>
            <Link to={`${props.address}`} className='primary-nav-btn'>
                shop
                <span className='sr-only'> {props.text} </span>
                <img src={props.forward} alt="" width="8" height="12" aria-hidden="true" />
            </Link>
        </li>
    )
}

export default PrimaryNav