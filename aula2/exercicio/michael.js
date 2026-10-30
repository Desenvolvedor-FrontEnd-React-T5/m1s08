const bicicletas = document.querySelectorAll(".bike");

bicicletas.forEach((bike) => {
  const nome = bike.querySelector(".nome-bike");
  const preco = bike.querySelector(".preco-bike");

  console.log(nome.innerText, preco.innerText);
});

const primeiraBike = document.querySelector(".bike");

const nomeBike = primeiraBike.querySelector(".nome-bike");
const precoBike = primeiraBike.querySelector(".preco-bike");
const imagemBike = primeiraBike.querySelector(".foto-bike");

// Nome da bicicleta 1
console.log(nomeBike.innerText);

// Preço da bicicleta 1
console.log(precoBike.innerText);

// Imagem da bicicleta 1
console.log(imagemBike);
