import React, { useState } from "react";
import Banner from "./components/Banner/Banner";
import Formulario from "./components/Formulario/Formulario";
import Sessao from "./components/Sessao/Sessao";
function App() {
// lista (array) de itens.
// o valor inicial é um array vazio []
  const [itens, setItens] = useState( [] )
  const adicionaiten = (iten) => {
    const listaNova = itens.slice();
    // adicionando o novo Item nesssa lista:
    listaNova.push(iten)
    // colocando a nova lista atualizada no estado:
    setItens( listaNova )
  }
  const marcas = [
    { nome: 'HP', imagem: '/imagens/hp.png' },
    { nome: 'Dell', imagem: '/imagens/dell.png' },
    { nome: 'Positivo', imagem: '/imagens/positivo.png' },
    { nome: 'Asus', imagem: '/imagens/asus.png' },
    { nome: 'Xing Ling genérico', imagem: '/imagens/xinglinggenerico.png' }
  ]
  const sessoes = [
    {
    nome : 'Computadores',
    corPrimaria : '#57c278',
    corSecundaria : '#d9f7e9'
    },
    {
    nome : 'Acessórios',
    corPrimaria : '#82cffa',
    corSecundaria : '#e8f8ff'
    },
    {
    nome : 'Impressoras',
    corPrimaria : '#a6d157',
    corSecundaria : '#f0f8e2'
    },
    {
    nome : 'Games',
    corPrimaria : '#e06b69',
    corSecundaria : '#fde7e8'
    },
    {
    nome : 'Gadgets',
    corPrimaria : '#6f69e0',
    corSecundaria : '#8b73e9ae'
    }
    ];

    const listasessoes = sessoes.map(sessao => sessao.nome);
  
    return (
      <div>
        <Banner />
        <Formulario sessoes={listasessoes} marcas={marcas} aoItemCadastrado={iten => adicionaiten(iten)} />
        { sessoes.map(sessao => <Sessao key={sessao.nome}
                                  nome={sessao.nome}
                                  corPrimaria={sessao.corPrimaria}
                                  corSecundaria={sessao.corSecundaria}
                                  itens={ itens.filter( iten => iten.sessao === sessao.nome ) }
        />) }
      
      </div>
    );
}
export default App;