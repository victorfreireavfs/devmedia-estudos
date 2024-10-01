let elemento = document.getElementById('meuElemento');
let titulo = document.getElementById('meuTitulo');

titulo.style.color = 'blue';
titulo.style.fontSize = '50px';

elemento.classList.add('vermelho')
elemento.style.fontSize = '20px';
// elemento.style.color = 'red';
// elemento.style.backgroundColor = 'black';

// lendo estilos

let estiloComp = window.getComputedStyle(elemento);
console.log(estiloComp.color);
console.log(estiloComp.fontFamily);
console.log(estiloComp.fontSize);


// 