import React from 'react'

function ButtonView(props) {
    const bgcolor = props.bgblack ? "btn-bg-black" : ""
    const bgtransparent = props.bgtransparent ? "btn-bg-transparent" : ""
    return (
        <a href="/" className={`btn-view-product ${bgcolor} ${bgtransparent}`}>
            See product
            <span className='sr-only'>{props.name}</span>
        </a>
    )
}

export default ButtonView