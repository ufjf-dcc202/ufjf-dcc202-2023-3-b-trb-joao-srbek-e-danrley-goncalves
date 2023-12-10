import {giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina} from "./logicaDoJogo.js";

const btnIniciar = document.querySelector("#iniciar");
const espacosJogador = document.querySelectorAll(".espacoUser");
const espacosBot = document.querySelectorAll(".espacoBot");
const espacoSomaC = document.querySelectorAll(".somas");

let turno = true;
let dado = giraDado();
let vencedor = "";
let somaCol=0;


btnIniciar.addEventListener("click", function() {
    mostraNaTela();
    //this.disabled = true;
});


//console.log(`${dado}`);
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
        somaDasColunas(espacoSomaC,somaCol,turno);
        turno = !turno;
        console.log(`${turno}`);
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
