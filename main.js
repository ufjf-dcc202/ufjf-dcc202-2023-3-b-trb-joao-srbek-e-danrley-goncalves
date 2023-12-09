import {giraDado,getDado,getTabuleiro,jogada} from "./logicaDoJogo.js";

/*const botaoIniciar = document.querySelector("#btnIniciar");
botaoIniciar.addEventListener("click", giraDado());*/

const tabuleiro = getTabuleiro();
let turno = true;
const dado = getDado();
const celulas = document.querySelectorAll(".espacoUser");

document.querySelector("#dado").textContent = dado;

celulas.forEach((celula) => {
  celula.addEventListener("click", function () {
    if (celula.textContent === 0) {
      celula.textContent = giraDado();
    } else {
      return;
    }
  });
});

console.log(`${dado}`);
/*function tela(){
    const tabuleiroBot = getTabuleiroBot();
    const tabuleiroPlayer = getTabuleiroPlayer();

}*/
