let numero = Number(prompt('Digite um número:'));

let numeroTitulo = document.getElementById('numero-titulo')
let texto = document.getElementById('texto')
numeroTitulo.innerHTML = numero

texto.innerHTML += ` A raiz quarada dele é:  ${numero ** 0.5}<br/>`;
texto.innerHTML += ` Seu número ao quarado: ${numero ** 2 }<br/>`;
texto.innerHTML += ` Seu número é inteiro ? ${Number.isInteger(numero)}<br/>`;
texto.innerHTML += ` Ele é NaN?  ${Number.isNaN(numero)}<br/>`;
texto.innerHTML += ` Arredondando para cima:  ${Math.ceil(numero)}<br/>`;
texto.innerHTML += ` Arredondando para baixo:  ${Math.floor(numero)}<br/>`;
texto.innerHTML += ` Representação binária:  ${numero.toString(2)}<br/>`;
texto.innerHTML += ` Duas casas decimais:  ${numero.toFixed (2)}<br/>`;