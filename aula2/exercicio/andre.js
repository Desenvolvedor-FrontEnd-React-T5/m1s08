console.log("Executando main.js");

// BUSCAR TODAS AS BICICLETAS - querySelectorAll
const bicicletas = document.querySelectorAll(".bike"); // [bike1, bike2, bike3, ...]

console.log("main.js::bikes");
console.log(bicicletas);

bicicletas.forEach((bike) => {
  const precoBike = bike.querySelector(".preco-bike").textContent;
  const nomeBike = bike.querySelector(".nome-bike").textContent;
  const imgBike = bike.querySelector(".foto-bike").src;

  console.log(nomeBike);
  console.log(precoBike);
  console.log(imgBike);
});
