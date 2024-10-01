// SELECIONANDO ELEMENTOS DOM
let meuDiv = document.getElementById("meuDiv");
// selecionando pelo id
let minhaClasse = document.getElementsByClassName("minhaClasse")[0];
//  selecionando pela classe
let h1 = document.getElementsByTagName("h1")[0];
// selecionando pelo nome da tag

let meuDiv2 = document.querySelector("#meuDiv");
let minhaClasse2 = document.querySelector(".minhaClasse");
let h1_2 = document.querySelector("h1");
// usando query selector para selecionar os elementos


// MANIPULANDO CONTEÚDO
meuDiv.textContent = "Novo conteúdo para meu div";
minhaClasse.innerHTML = "<strong>Novo conteúdo para minha classe </strong>";
h1.textContent = "Novo conteúdo para meu H1.";

