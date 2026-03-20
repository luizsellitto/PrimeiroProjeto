import React from "react";
import './Texto.css';

const Texto = (props) => {
    return (
        <div className="texto">
            <span className="texto-label">{props.label}:</span>
            <span className="texto-valor">{props.valor}</span>
        </div>
    )
}

export default Texto;