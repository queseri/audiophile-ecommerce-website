import React from 'react'

function PrimaryNav(props) {
    return (
        <li className="primary-nav-list-item">
            <img className="primary-nav-image"
                src={props.src}
                alt=""
                aria-hidden="true" />

            <h4 className='headphones primary-nav-heading'>{props.title}</h4>
            <a className='primary-nav-btn' href="./">
                shop
                <span className='sr-only'> {props.text} </span>
                <img src={props.forward} alt="" aria-hidden="true" />
            </a>
        </li>
    )
}

export default PrimaryNav