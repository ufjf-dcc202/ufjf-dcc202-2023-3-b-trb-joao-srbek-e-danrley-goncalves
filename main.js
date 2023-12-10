import {giraDado,getTabuleiro,jogada, comparaElimina} from "./logicaDoJogo.js";

const btnIniciar = document.querySelector("#iniciar");
const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");

let dado = giraDado();
let turno = true;

btnIniciar.addEventListener("click", mostraNaTela);


//botaoIniciar.addEventListener("click", giraDado());
console.log(`${dado}`);


function mostraNaTela(){
    document.querySelector("#dado").textContent = dado;
    const tabuleiro = getTabuleiro();
    jogada(dado, espacosBot);
    dado = giraDado();  
}
