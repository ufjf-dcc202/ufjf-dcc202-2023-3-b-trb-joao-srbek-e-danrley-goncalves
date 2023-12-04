import{giraDado,jogadaBot, trocaQuemJoga} from"./logicaDoJogo.js"
const casasDoBot = document.getElementById('tabelaBot');
const casasDoUser = document.getElementById('tabelaUser');

let turno=trocaQuemJoga();
if(turno==bot){
    let dadoDoBot=giraDado();
    let espacoEscolhidoBot=jogadaBot();
    while(espacoEscolhidoBot!=0){
        if(casasDoBot[espacoEscolhidoBot]==0){
            adicionaNaTabelaDoBot(dadoDoBot);
            turno=trocaQuemJoga();
            espacoEscolhidoBot=0;
        }else{
            espacoEscolhidoBot=jogadaBot();
        }
    }
}

