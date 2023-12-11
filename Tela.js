import {giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina} from "./logicaDoJogo.js";

const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");
const espacoSomaC = document.querySelectorAll(".somas");
const somasT = document.querySelectorAll(".total");
const joga = document.querySelectorAll(".btnUser");

let somaCol=0;
let somaBot=0;
let somaPlayer=0;  

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
    somaDasColunas(espacoSomaC,somasT,somaCol,somaBot,somaPlayer,turno);
}




export{mostraNaTela,espacosBot,joga};