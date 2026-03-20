import React from "react";
import "./Item.css";
import Texto from "../Texto/Texto";
const Item = ( {nome, marca, preco, imagem, estado}) => {
    return (
    <div className="colaborador">
        <div className="cabecalho">
            <img src={imagem} alt={marca} />
        </div>
        <div className="rodape">
            <Texto label="Nome" valor={nome} />
            <Texto label="Preço" valor={preco} />
            <Texto label="Marca" valor={marca} />
            <Texto label="Estado" valor={estado} />
        </div>
    </div>
    );
}
export default Item;