import React from "react";
import './RadioButton.css';
const RadioButton = (props) => {
    return (
        <div className="radio-container">
            <label>{props.label}</label>
            
            <div className="radio-opcoes">
                {props.opcoes.map(opcao => (
                    <div 
                        key={opcao}
                        className={`radio-opcao ${props.valor === opcao ? 'selecionado' : ''}`}
                        onClick={() => props.aoAlterado(opcao)}
                    >
                        <input 
                            type="radio"
                            value={opcao}
                            checked={props.valor === opcao}
                            onChange={() => {}}
                        />
                        {opcao}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RadioButton;