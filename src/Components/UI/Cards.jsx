import React from "react";
import './Cards.modules.css'

const Cards = (props) => {
    return (
        <div className={`cards ${props.extraClass ? props.extraClass : ''}`}>
            {props.children}
        </div>
    )
}

export default Cards