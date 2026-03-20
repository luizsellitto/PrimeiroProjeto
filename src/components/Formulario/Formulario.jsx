import React, { useState } from "react";
import './Formulario.css';
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";
import RadioButton from "../RadioButton/RadioButton";
import LabelTitulo from "../LabelTitulo/LabelTitulo";
const Formulario = (props) => {
// Criando os estados...
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [marca, setMarca] = useState('HP')
    const [sessao, setSessao] = useState('Computadores')
    const [estado, setEstado] = useState('Novo')
    const aoSalvar = (evento) => {
    evento.preventDefault()

    const marcaSelecionada = props.marcas.find(m => m.nome === marca)

    props.aoItemCadastrado({
        nome,
        preco,
        sessao,
        marca: marcaSelecionada.nome,
        imagem: marcaSelecionada.imagem,
        estado: estado
    })

    setNome('')
    setPreco('')
    setMarca('HP')
    setSessao('Computadores')
    setEstado('Novo')
    }
    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Dados do Produto:</h2>
                <ListaSuspensa
                label="Sessão"
                itens={props.sessoes}
                valor={sessao}

                aoAlterado={valor => setSessao(valor)}

                />

                <ListaSuspensa
                label="Marca"
                itens={props.marcas.map(m => m.nome)}
                valor={marca}
                aoAlterado={valor => setMarca(valor)}
                />

                <CampoTexto
                label="Nome"

                placeholder="Digite seu nome"
                valor={nome}

                aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                label="Valor"

                placeholder="Digite o valor do produto"
                valor={preco}

                aoAlterado={valor => setPreco(valor)}
                />

                <div>
                    <LabelTitulo label="Estado" />
                    
                    <RadioButton
                        opcoes={['Novo', 'Usado']}
                        valor={estado}
                        aoAlterado={valor => setEstado(valor)}
                    />
                </div>

                <Botao>Inserir Produto</Botao>
            </form>
        </section>
    )
}
export default Formulario;