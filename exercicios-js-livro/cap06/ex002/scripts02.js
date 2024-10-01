// adicionar eventos ao DOM
let button = document.getElementById('myButton');
button.addEventListener('click', function(){
    console.log('O botão foi clicado!');
});

let paragraph = document.getElementById('myParagraph');
paragraph.addEventListener('mouseover', function(){
    console.log('O mouse está sobre o paragrafo')
});

let input = document.getElementById('myInput');
input.addEventListener('change', function(){
    console.log('O valor do input foi alterado para' + this.value);
});

let form = document.getElementById('myForm');
form.addEventListener('submit', function(event){
    event.preventDefault() //isso imprede que a página seja recarregada
    console.log('Formulário submetido!')
});

// window.addEventListener('keydown', function(event){
//     console.log('Você pressionou a tecla:' + event.key);
// });