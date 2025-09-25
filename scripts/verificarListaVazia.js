function verificarListaVazia(listaDeCompras) {
    //O queryselectorAll seleciona todos os elementos que encontrar com a classe CSS especificada.
    const itensDaLista = listaDeCompras.querySelectorAll("li");
    if (itensDaLista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else{
        mensagemListaVazia.style.display = "none";  
    }
}

export default verificarListaVazia;