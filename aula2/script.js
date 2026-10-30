const titulo = document.getElementById("titulo");
const mensagem = document.getElementById("mensagem");
const outraMensagem = document.querySelector("#outraMensagem");
const rodape = document.querySelector("#footer");
const liIngrediente = document.querySelector("#listaIngredientes li");
const ingredientes = document.querySelectorAll("#listaIngredientes li");

const primeiroPassoModoPreparo = document.querySelector("#modoPreparo li");
const listaModoPreparo = document.querySelector("#modoPreparo");
const divIngredientes = document.querySelector("#ingredientes");

console.log(titulo);
console.log(mensagem);

titulo.textContent = "Mudei o titulo";
mensagem.textContent = "<b>mensagem alterada!</b>";

console.log(mensagem.textContent);

outraMensagem.innerHTML = "<b>mensagem alterada!</b>";

rodape.textContent = "Fonte: vozes da minha cabeça";

rodape.style.color = "gray";
rodape.style.fontFamily = "Arial, Helvetica, sans-serif";
rodape.style.fontSize = "10px";
rodape.style.textAlign = "left";

liIngrediente.textContent = "Alterei o item da lista de ingredientes.";

console.log(ingredientes);

primeiroPassoModoPreparo.classList.add("destaque");

const novoItemModoPreparo = document.createElement("li");
novoItemModoPreparo.textContent = "Coma sem moderação!";
novoItemModoPreparo.classList.add("itensListaOrdenada");

console.log(novoItemModoPreparo);

listaModoPreparo.appendChild(novoItemModoPreparo);

const novoIngrediente = document.createElement("li");
novoIngrediente.classList.add("ingredientes");
novoIngrediente.textContent = "Uma pitadinha de amor <3";

divIngredientes.insertBefore(novoIngrediente, liIngrediente);
const br = document.createElement("br");
divIngredientes.insertBefore(br, liIngrediente);

rodape.addEventListener("click", () => {
  rodape.classList.toggle("destaque");
});

//rodape.remove();
