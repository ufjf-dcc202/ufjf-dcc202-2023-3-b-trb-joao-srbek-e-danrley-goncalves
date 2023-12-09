const tabuleiro = {
  'player':[
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
  ],
  'bot': [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
  ]
}

/*function trocaTurno(){
    if (turnoJogador === true) {
      turnoJogador = false;
    }else{
      turnoJogador = true;
    }
}*/

//const dado = document.querySelector("dado");

function getTabuleiro() {
  return structuredClone(tabuleiro);
}

function giraDado() {
  let valorDado = Math.floor(Math.random() * 6) + 1;
  return valorDado;
}

function getDado() {
  return giraDado();
}

function jogada(valor) {
  let linha;
  let coluna;
  linha = Math.floor(Math.random() * 3);
  coluna = Math.floor(Math.random() * 3);
  if (tabuleiro.bot[linha][coluna] === 0) {
    tabuleiro.bot[linha][coluna] = valor;
    return;
  }
}

export { giraDado, getDado,getTabuleiro,jogada};
