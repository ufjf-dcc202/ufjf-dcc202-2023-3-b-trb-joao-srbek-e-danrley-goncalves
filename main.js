import {giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina,quemVenceu} from "./logicaDoJogo.js";

const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");
const espacoSomaC = document.querySelectorAll(".somas");
const somasT = document.querySelectorAll(".total");
const btnIniciar = document.querySelector("#iniciar");
const parag = document.querySelectorAll(".paragrafo");
const vencedor = document.querySelector(".win");

let turno = true;
let cheioBot=true;
let cheioPlayer=true;
let dado = giraDado();
let somaCol=0;
let somaBot=0;
let somaPlayer=0;


btnIniciar.addEventListener("click", function() {
    somaDasColunas(espacoSomaC,somasT,somaCol,somaBot,somaPlayer,turno);
    mostraNaTela();
    comparaElimina(espacosBot,parag,turno);
    somaDasColunas(espacoSomaC,somasT,somaCol,somaBot,somaPlayer,turno);
});

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
    jogada(dado, espacosBot,parag, turno);
    somaDasColunas(espacoSomaC,somasT,somaCol,somaBot,somaPlayer,turno);
    turno = !turno;
    dado=giraDado();
    quemVenceu(vencedor,cheioBot,cheioPlayer);
}

export{btnIniciar}
