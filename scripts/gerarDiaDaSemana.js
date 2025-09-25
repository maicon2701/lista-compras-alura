function gerarDiaDaSemana() {
    
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", { //O to localeDateString é uma metodo Date instances que retorna uma string que é language-sensitive, que representa a data no fuso horario local.  
        //Long: É o que vai fazer o nome do dia sair completo, por ex: Segunda-feira.
        weekday: "long"});

    const data = new Date().toLocaleDateString("pt-BR");

     //Funciona da mesma forma que toLocaleDateString, mas para o tempo. Ele transforma uma hora como "14:30:00" em "2:30 PM" ou "14:30", dependendo do formato que você escolher.
    const hora  = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    }

    );
    const dataCompleta = `${diaDaSemana} (${data}) àS ${hora}`;

    return dataCompleta;
}
//Por padrão ele vai exportar somente essa função.
export default gerarDiaDaSemana;