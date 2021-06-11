const section = document.querySelector("section");
section.style.opacity = "0";
const divBtn = document.querySelector("#div-btn");
const btn = document.querySelector("#div-btn button");

const jgX = document.querySelector("#jgX");
const jgO = document.querySelector("#jgO");

let gameOccurring = false;

btn.addEventListener("click", () => {
  cmc();
});

function cmc() {
  section.style.opacity = "100";
  divBtn.style.pointerEvents = "none";
  divBtn.style.opacity = "0";
  gameOccurring = true;
}

var anterior = "o";
const texto = document.querySelector("#windmessage");
var jogX = 0;
var jogO = 0;

const casas = [
  document.querySelector("#casa0"),
  document.querySelector("#casa1"),
  document.querySelector("#casa2"),
  document.querySelector("#casa3"),
  document.querySelector("#casa4"),
  document.querySelector("#casa5"),
  document.querySelector("#casa6"),
  document.querySelector("#casa7"),
  document.querySelector("#casa8"),
];

casas.forEach((casa, index) => {
  console.log(casa);
  casa.addEventListener("click", () => {
    marcar(index);
  });
});

function marcar(index) {
  if (!gameOccurring) return;
  if (cVerificar(index, "X") || cVerificar(index, "O")) return;

  if (anterior === "x") {
    jogO += 1;
    document.querySelector(`#image${index}`).src = "./images/bola.png";
    casas[index].classList.add("O");
    jgO.innerHTML = "Jogador O: " + jogO;
    anterior = "o";
  } else {
    anterior = "x";
    jogX += 1;
    document.querySelector(`#image${index}`).src = "./images/x.png";
    casas[index].classList.add("X");
    jgX.innerHTML = "Jogador X: " + jogX;
  }
  if (jogX + jogO === 9) {
    empatar();
    return;
  }
  if (
    (cVerificar(0, "X") && cVerificar(1, "X") && cVerificar(2, "X")) ||
    (cVerificar(3, "X") && cVerificar(4, "X") && cVerificar(5, "X")) ||
    (cVerificar(6, "X") && cVerificar(7, "X") && cVerificar(8, "X")) ||
    (cVerificar(0, "X") && cVerificar(3, "X") && cVerificar(6, "X")) ||
    (cVerificar(1, "X") && cVerificar(4, "X") && cVerificar(7, "X")) ||
    (cVerificar(2, "X") && cVerificar(5, "X") && cVerificar(8, "X")) ||
    (cVerificar(0, "X") && cVerificar(4, "X") && cVerificar(8, "X")) ||
    (cVerificar(2, "X") && cVerificar(4, "X") && cVerificar(6, "X"))
  ) {
    ganhou("X");
  } else if (
    (cVerificar(0, "O") && cVerificar(1, "O") && cVerificar(2, "O")) ||
    (cVerificar(3, "O") && cVerificar(4, "O") && cVerificar(5, "O")) ||
    (cVerificar(6, "O") && cVerificar(7, "O") && cVerificar(8, "O")) ||
    (cVerificar(0, "O") && cVerificar(3, "O") && cVerificar(6, "O")) ||
    (cVerificar(1, "O") && cVerificar(4, "O") && cVerificar(7, "O")) ||
    (cVerificar(2, "O") && cVerificar(5, "O") && cVerificar(8, "O")) ||
    (cVerificar(0, "O") && cVerificar(4, "O") && cVerificar(8, "O")) ||
    (cVerificar(2, "O") && cVerificar(4, "O") && cVerificar(6, "O"))
  ) {
    ganhou("O");
  }
}

function cVerificar(index, jog) {
  return casas[index].classList.contains(jog);
}

function ganhou(jogador) {
  gameOccurring = false;
  texto.style.opacity = "100%";
  texto.innerHTML = `O jogador ${jogador} ganhou!`;

  setTimeout(() => {
    casas.forEach((casa, index) => {
      casa.style.backgroundColor = "white";
      texto.style.opacity = "0%";

      jogX = 0;
      jogO = 0;
      jgX.innerHTML = "Jogador X: 0";
      jgO.innerHTML = "Jogador O: 0";

      document.querySelector(`#image${index}`).src = "./";
      if (casas[index].classList.contains("X")) {
        casas[index].classList.remove("X");
      } else {
        casas[index].classList.remove("O");
      }

      gameOccurring = true;
    });
  }, 3000);
}

function empatar(empatar) {
  gameOccurring = false;
  texto.style.opacity = "100%";
  texto.innerHTML = `Deu velha. Ninguém ganhou!`;

  setTimeout(() => {
    casas.forEach((casa, index) => {
      casa.style.backgroundColor = "white";
      texto.style.opacity = "0%";

      jogX = 0;
      jogO = 0;
      jgX.innerHTML = "Jogador X: 0";
      jgO.innerHTML = "Jogador O: 0";

      document.querySelector(`#image${index}`).src = "./";
      if (casas[index].classList.contains("X")) {
        casas[index].classList.remove("X");
      } else {
        casas[index].classList.remove("O");
      }

      gameOccurring = true;
    });
  }, 3000);
}
