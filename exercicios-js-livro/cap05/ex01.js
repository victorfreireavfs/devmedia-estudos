let estudante = {
    nome: "Victor",
    idade: 31,
    curso: "Front-end"
};
estudante.idade= 29;

// --------------------

estudante.semestre = "3";
// console.log(estudante);

// --------------------
let frutas = ["maçã", "uva", "banana"];
let adicionarFrutas = frutas.push("manga");
// console.log(adicionarFrutas,frutas);

let removerFrutas = frutas.shift();
// console.log(removerFrutas,frutas);

let stringFrutas = frutas.join(" , ");
// console.log(stringFrutas);

let frutasSelecionadas = frutas.slice(1,3)
// console.log(frutasSelecionadas);

// ---------------------------

let numeros = [5, 15, 25, 35, 45];
let quadrados = numeros.map(num => num*num);
// arrow function
console.log(quadrados)

let soma = (a,b) => a+b;

console.log(soma(5,5));