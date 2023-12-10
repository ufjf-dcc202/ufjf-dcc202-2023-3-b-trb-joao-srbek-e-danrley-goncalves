import {giraDado,getTabuleiro,jogada, comparaElimina} from "./logicaDoJogo.js";

const btnIniciar = document.querySelector("#iniciar");
const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");

let turno =false;
let dado = giraDado();


btnIniciar.addEventListener("click", function() {
    mostraNaTela();
    this.disabled = true;
});



console.log(`${dado}`);
function alocaDado(){
    if(turno === false){
        document.querySelector("#dado1").textContent = null; 
        document.querySelector("#dado").textContent = dado;
    }else{
        document.querySelector("#dado").textContent = null;
        document.querySelector("#dado1").textContent = dado;
    }
}

function mostraNaTela(){
    const tabuleiro = getTabuleiro();
    alocaDado();
    jogada(dado, espacosBot,espacosJogador, turno);
    turno = !turno;
    dado = giraDado();
}
