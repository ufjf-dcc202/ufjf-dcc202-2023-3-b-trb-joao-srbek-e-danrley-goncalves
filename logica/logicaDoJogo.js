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


export{giraDado,jogadaBot, trocaQuemJoga,adicionaNaTabelaDoBot}