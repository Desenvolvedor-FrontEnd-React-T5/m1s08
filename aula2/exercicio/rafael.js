const listaNomesPrecos = document.querySelectorAll(
  ".escolha-sua .nome-bike, .escolha-sua .preco-bike",
);
console.log("1. Nome e preço de todas as bicicletas:", listaNomesPrecos);

const nomeBicicleta1 = document.querySelector(".escolha-sua .nome-bike");
console.log("2. Nome da Bicicleta 1:", nomeBicicleta1.innerText);

const precoBicicleta1 = document.querySelector(".escolha-sua .preco-bike");
console.log("3. Preço da Bicicleta 1:", precoBicicleta1.innerText);

const imagemBicicleta1 = document.querySelector(".escolha-sua .foto-bike");
console.log("4. Imagem da Bicicleta 1:", imagemBicicleta1);
