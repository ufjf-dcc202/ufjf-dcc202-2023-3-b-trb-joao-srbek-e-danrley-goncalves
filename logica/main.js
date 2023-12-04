import{giraDado,jogadaBot} from"./logicaDoJogo.js"
const tableBot = document.querySelector('#')
var botJoga = document.getElementsByClassName('.boxBot');

botJoga.addEventListener('click', adicionaNumeroDoBot);

let dadoDoBot=giraDado();
let espacoEscolhidoBot=jogadaBot();

function adicionaNumeroDoBot(dadoDoBot){
    const tr=document.createElement("tr");
    tr.textContent = texto;
    tableBot.appendChild(tr);
}