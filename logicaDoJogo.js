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

function comparaElimina() {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tabuleiroPlayer.player[j][i] === tabuleiroPlayer.bot[j][i]) {
          tabuleiroPlayer.player[j][i] = 0;
          tabuleiroPlayer.bot[j][i] = 0;
        }
      }
    }
  }

export { giraDado, getDado,getTabuleiro,jogada, comparaElimina};
