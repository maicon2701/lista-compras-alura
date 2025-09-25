import { criarItemDaLista } from "./scripts/criarItemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById('adicionar-item');

/*Evento para pegar o que foi escrito no input e enviar*/
//Arrow function: () =>{}
botaoAdicionar.addEventListener("click",(evento) => { /*FUNÇÃO PARA ADICIONAR ITEM NA LISTA*/
    //prevent defaul: previne que a ação padrão do envio do evento aconteça, ou seja, ele não vai atualizar a tela correndo o risco de perder tudo!!!
    evento.preventDefault();
    const itemDaLista = criarItemDaLista();
    listaDeCompras.appendChild(itemDaLista)
    verificarListaVazia(listaDeCompras);
});

//O querySelector seleciona o primeiro elemento que encontrar com a classe CSS especificada.
const mensagemListaVazia = document.querySelector(".mensagem-lista-vazia")

verificarListaVazia(listaDeCompras);