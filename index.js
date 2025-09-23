const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById('adicionar-item');

let contador = 0;

/*Evento para pegar o que foi escrito no input e enviar*/
//Arrow function: () =>{}
botaoAdicionar.addEventListener("click",(evento) => { /*FUNÇÃO PARA ADICIONAR ITEM NA LISTA*/
    //prevent defaul: previne que a ação padrão do envio do evento aconteça, ou seja, ele não vai atualizar a tela correndo o risco de perder tudo!!!
    evento.preventDefault();
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
    

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { //O to localeDateString é uma metodo Date instances que retorna uma string que é language-sensitive, que representa a data no fuso horario local.  
        //Long: É o que vai fazer o nome do dia sair completo, por ex: Segunda-feira.
        weekday: "long"});

    const data = new Date().toLocaleDateString("pt-BR");

     //Funciona da mesma forma que toLocaleDateString, mas para o tempo. Ele transforma uma hora como "14:30:00" em "2:30 PM" ou "14:30", dependendo do formato que você escolher.
    const hora  = new Date().toLocaleTimeString("pt-br", {
        hour: "numeric",
        minute: "numeric"
    }

    );
    const dataCompleta = `${diaDaSemana} (${data}) àS ${hora}`;
    const itemData = document.createElement('p');
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data")
    itemDaLista.appendChild(itemData);

    //Adicionamos a nossa li na tag ul. Isso faz com que todo o que foi criado anteriormente seja anexado na nossa lista e mostrado em nossa tela.
    listaDeCompras.appendChild(itemDaLista)
    //Informa o valor do tempo atual(Tempo em que o evento foi chamado.)
    
});