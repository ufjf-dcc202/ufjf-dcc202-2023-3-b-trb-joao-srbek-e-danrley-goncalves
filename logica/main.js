import{giraDado,jogadaBot} from"./logicaDoJogo.js"
var botJoga = document.getElementsByClassName('.boxBot');

let dadoDoBot=giraDado();
let espacoEscolhidoBot=jogadaBot();

console.log(`Dado do bot deu ${dadoDoBot}`);