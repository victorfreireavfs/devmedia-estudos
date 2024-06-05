// let frase = "Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.";
// let posicao = frase.indexOf("sonho");

// console.log(posicao);


let expressao_proibida = "passaporte falso";

let comentario = "   venda de PASSAPORTE FALSO   ";

comentario = comentario.trim();
comentario = comentario.toLowerCase();

if ( comentario.indexOf(expressao_proibida) > -1 ){

    console.log("No seu comentário há palavras proibidas. Atualize seu comentário e envie novamente");

} else {

    console.log("Seu comentário foi aprovado");

}

console.log(comentario);