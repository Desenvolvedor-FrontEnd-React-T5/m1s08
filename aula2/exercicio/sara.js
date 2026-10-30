//Nome e preço de todas as bicicletas

const allBikes = document.querySelectorAll(".nome-bike,.preco-bike");
console.log(allBikes);
allBikes.forEach((p) => {
  console.log(p.textContent);
});

//Nome da Bicicleta 1 (console.log 2)
const nomeBike1 = document.querySelector(".nome-bike").textContent;
console.log("Nome da bicicleta 1: " + nomeBike1);

//Preço da Bicicleta 1 (console.log 3)
const precoBike1 = document.querySelector(".preco-bike").textContent;
console.log("Preço da bicileta 1: " + precoBike1);

//Imagem da Bicicleta 1 (console.log 4)
const imagemBike1 = document.querySelector(".foto-bike").src;
console.log("Imagem da bicileta 1: " + imagemBike1);
