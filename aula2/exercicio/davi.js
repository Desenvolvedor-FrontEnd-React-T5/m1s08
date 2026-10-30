//nomes bicicletas e preços
const nomesBicicletas = document.querySelectorAll(".escolha-sua .nome-bike");
const precosBicicletas = document.querySelectorAll(".escolha-sua .preco-bike");

//seleciona nome, preço e imagem da bicicleta 1
const nomeBike1 = document.querySelector(".escolha-sua .nome-bike");
const precoBike1 = document.querySelector(".escolha-sua .preco-bike");
const imagemBike1 = document.querySelector(".escolha-sua .foto-bike");

//nome e preço de todas as bicicletas
//console.log(nomesBicicletas, precosBicicletas);

nomesBicicletas.forEach((p) => {
  console.log(p.textContent);
});

precosBicicletas.forEach((p) => {
  console.log(p.textContent);
});

//nome da Bicicleta 1(usa .innerText para mostrar apenas o texto)
console.log(nomeBike1.innerText);

// preço da Bicicleta 1(usa .innerText para mostrar apenas o texto)
console.log(precoBike1.innerText);

//imagem da Bicicleta 1
console.log(imagemBike1.src);
