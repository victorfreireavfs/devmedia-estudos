let numero = prompt('Digite um número:');
let numeroN = Number(numero)

    document.body.innerHTML += ` Seu número é: ${Number(numeroN)} <br/>`;
    document.body.innerHTML += ` A raiz quarada dele é:  ${numeroN ** 0.5}.<br/>`;
    document.body.innerHTML += ` Seu número ao quarado: ${numeroN ** 2 }. <br/>`;
    document.body.innerHTML += ` Seu número é inteiro ? ${Number.isInteger(numeroN)} <br/>`;
    document.body.innerHTML += ` Ele é NaN?  ${Number.isNaN(numeroN)} <br/>`;
    document.body.innerHTML += ` Arredondando para cima:  ${Math.ceil(numeroN)}<br/>`;
    document.body.innerHTML += ` Arredondando para baixo:  ${Math.floor(numeroN)} <br/>`;
    document.body.innerHTML += ` Representação binária:  ${numeroN.toString(2)}<br/>`;
    document.body.innerHTML += ` Duas casas decimais:  ${numeroN.toFixed(2)}<br/>`;

