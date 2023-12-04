let jogadorAtual='user';
function giraDado(){
    return Math.floor(Math.random()*6)+1;
}
function trocaQuemJoga(jogadorAtual){
    if(jogadorAtual==user){
        return jogadorAtual;
        jogadorAtual='bot';
    }else{
        return jogadorAtual;
        jogadorAtual='user';
    }
}
function jogadaBot(){
    return espaco= Math.floor(Math.random()*9)+1;
}
function jogadaUser(){
    
}
function adicionaNaTabelaDoBot(valor){
    const tr =document.createElement("tr");
    tr.textContent = valor;
    casasDoBot.appendChild(tr);
}

export{giraDado,jogadaBot, trocaQuemJoga,adicionaNaTabelaDoBot}