const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const outraMensagem = document.querySelector("#outraMensagem");

console.log(titulo);
console.log(mensagem);

titulo.textContent = "Mudei o titulo";
mensagem.textContent = "<b>mensagem alterada!</b>";

console.log(mensagem.textContent);

outraMensagem.innerHTML = "<b>mensagem alterada!</b>";

const rodape = document.querySelector("#footer");
rodape.textContent = "Fonte: vozes da minha cabeça";

const liIngredientes = document.querySelector("#listaIngredientes li");

liIngredientes.textContent = "Alterei o item da lista de ingredientes.";

const ingredientes = document.querySelectorAll("#listaIngredientes li");

console.log(ingredientes);

