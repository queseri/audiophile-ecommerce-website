import React from 'react'
import { Link } from "react-router-dom"

function ButtonView(props) {
    const bgcolor = props.bgblack ? "btn-bg-black" : ""
    const bgtransparent = props.bgtransparent ? "btn-bg-transparent" : ""
    const hideButton = props.hide ? "hide" : ""
    return (
        <>
            <Link to={`${props.address}`}
                className={`btn-view-product ${bgcolor} ${bgtransparent} ${hideButton}`}>
                See product
                <span className='sr-only'>{props.name}</span>
            </Link>

        </>
    )
}

export default ButtonView