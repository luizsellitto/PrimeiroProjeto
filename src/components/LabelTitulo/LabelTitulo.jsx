import React from "react";
import './LabelTitulo.css';
const LabelTitulo = (props) => {
    return (
        <div className="label-titulo">
            <label> {props.label} </label>
        </div>
    );
    }
export default LabelTitulo;