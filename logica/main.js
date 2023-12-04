import{trocaQuemJoga,jogadaPlayerAtual} from"./logicaDoJogo.js"

let iniciarJogo = document.getElementById('btnIniciar'); 

iniciarJogo.addEventListener('click', function() {
    let trocaTurno = trocaQuemJoga();
    let jogadaAcontece = jogadaPlayerAtual();
});



