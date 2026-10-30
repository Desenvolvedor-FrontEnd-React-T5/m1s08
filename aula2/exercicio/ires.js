const todasBikes = document.querySelectorAll(".bicicleta");

todasBikes.forEach((bike, indice) => {
  const nome = bike.querySelector(".nome-bike").textContent;
  const preco = bike.querySelector(".preco-bike").textContent;
  console.log(`Bicicleta ${indice + 1}: ${nome} — ${preco}`);
});

// =====================================================
// console.log 2 → Nome da Bicicleta 1
// =====================================================
const bike1 = document.getElementById("bicicleta-1");
const nomeBike1 = bike1.querySelector(".nome-bike").textContent;
console.log(nomeBike1);

// =====================================================
// console.log 3 → Preço da Bicicleta 1
// =====================================================
const precoBike1 = bike1.querySelector(".preco-bike").textContent;
console.log(precoBike1);

// =====================================================
// console.log 4 → Imagem da Bicicleta 1
// =====================================================
const imagemBike1 = bike1.querySelector(".imagem-bike").src;
console.log(imagemBike1);
