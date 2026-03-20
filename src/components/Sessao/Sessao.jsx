import React from "react";
import './Sessao.css';
import Item from "../Item/Item";
const sessao = (props) => {
    const corDeFundo = { backgroundColor : props.corSecundaria }
    const corSublinhado = { borderColor : props.corPrimaria }
    return (
        (props.itens.length > 0) ? <section className="sessao" style={corDeFundo}>
            <h3 style={ corSublinhado }>{props.nome}</h3>
            <div className="itens">
                {props.itens.map( iten => <Item
                key={iten.nome}
                nome={iten.nome}
                preco={iten.preco}
                marca={iten.marca}
                imagem={iten.imagem}
                estado={iten.estado}
                /> )}
            </div>
        </section>
        : ''
    )
}
export default sessao;