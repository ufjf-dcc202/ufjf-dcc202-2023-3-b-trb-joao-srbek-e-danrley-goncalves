import {giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina} from "./logicaDoJogo.js";

const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");
const espacoSomaC = document.querySelectorAll(".somas");
const somasT = document.querySelectorAll(".total");
const btnIniciar = document.querySelector("#iniciar");
const parag = document.querySelectorAll(".paragrafo");

let vencedor = "";
let turno = true;
let dado = giraDado();
let somaCol=0;
let somaBot=0;
let somaPlayer=0; 

btnIniciar.addEventListener("click", function() {
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
}




/*function quemVence(){
    for(let i;i<espacosBot.length;i++){
        if(espacos[i]!==0){
            vencedor = "bot";
        }else{
            vencedor = "";
            break;
        }
    }
    for(let i;i<espacosBot.length;i++){
        if(espacos[i]!==0){
            vencedor = "jogador";
        }else{
            vencedor = "";
            break;
        }
    }
}*/
