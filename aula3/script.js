const botao = document.querySelector("#btn");
const msg = document.querySelector("#msg");
const bloco = document.querySelector(".bloco");

let contador = 0;

botao.addEventListener("click", () => {
  contador++;
  msg.textContent = "Cliques: " + contador;
});

// Clique simples
msg.addEventListener("click", function () {
  console.log("Clicou!");
});

// Clique duplo
msg.addEventListener("dblclick", function () {
  console.log("Clicou duas vezes!");
});

// Mouse entrou no elemento
msg.addEventListener("mouseover", function () {
  console.log("Mouse entrou!");
});

// Mouse saiu do elemento
msg.addEventListener("mouseout", function () {
  console.log("Mouse saiu!");
});

// Escutando qualquer tecla no documento inteiro
/* document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowDown") {
    console.log("desce");
  }
  console.log("Tecla pressionada: " + event.key);
}); */

document.addEventListener("keyup", function (event) {
  switch (event.key) {
    case "ArrowUp":
      console.log("sobe");
      break;
    case "ArrowDown":
      console.log("desce");
      break;
    case "ArrowRight":
      console.log("direita");
      bloco.style.marginLeft = "100px";
      bloco.style.marginRight = "0px";
      break;
    case "ArrowLeft":
      console.log("esquerda");
      bloco.style.marginRight = "100px";
      bloco.style.marginLeft = "0px";
      break;
    default:
      console.log("pressione uma seta direcional");
  }

  console.log("Tecla solta: " + event.key);
});
