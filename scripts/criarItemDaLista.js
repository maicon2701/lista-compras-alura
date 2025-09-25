import gerarDiaDaSemana from "./gerarDiaDaSemana.js";
const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    //o === está sendo usado como comparador. No caso ele está comparando se o valor é igual a vazio ""
    if (inputItem.value === ""){
        alert("O campo está vazio, por favor insira um item!")
        //O return utilizado sozinho, faz com que ação que estava sendo feita, retorne. Ou seja, ela não executa
        return;
    }

    //Cria um elemento novo (li) e armazena ele dentro da variavel
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    //Adiciona a classe CSS nessa variavel(que contem a tag html div). Sem isso quando adicionássemos esse item na lista, ele não viria com as mesmas estilizações do item já estabelcido.
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckbox = document.createElement("input");
    //Estamos definindo o tipo desse input para checkbox
    inputCheckbox.type = "checkbox";
    //Define o id desse inputa e adiciona valor ao contador
    inputCheckbox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    //O innerText altera o texto do elemento
    nomeItem.innerText = inputItem.value;

    //Evento que faz com que quando o checkbox for clicado, ele risque o item da lista.
    inputCheckbox.addEventListener("click",function (){
        if (inputCheckbox.checked){
            nomeItem.style.textDecoration = 'line-through';
            } else {
                nomeItem.style.textDecoration = 'none';
            }
        }
    );

    //Atribui no elemento pai (containerItem) os elementos filhos (input e item). Basicamente estamos fazendo uma conexão entre as tags div,input e p
    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    /*Fizemos uma conexão entre elementos pai e filho de tras para frente. Isso significa que LI é o pai da div, a div é pai do input e da tag p.*/
    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData);

    //Adicionamos a nossa li na tag ul. Isso faz com que todo o que foi criado anteriormente seja anexado na nossa lista e mostrado em nossa tela.
    return itemDaLista;
}