// alterar conteúdo do texto
let heading = document.getElementById('main-heading');
heading.textContent = 'Novo Título';

// alterar HTML interno
let div = document.getElementById('main');
div.innerHTML = '<p> Este é o novo parágrafo. </p>';

// alterar atributos
let link = document.querySelector('a');
link.setAttribute('href', 'https://www.youtube.com/watch?v=oA1oUirH8PE');

// alterar estilos (propriedade style)
div.style.color = 'blue';

// 