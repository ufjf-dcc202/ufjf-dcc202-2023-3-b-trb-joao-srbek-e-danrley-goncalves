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

function jogada(valor, espacos,espacos2, turnoJogador) {
  if(turnoJogador===false){
    let linha;
    let coluna;
    do{
      linha = Math.floor(Math.random() * 3);
      coluna = Math.floor(Math.random() * 3);
    }while (tabuleiro.bot[linha][coluna] !== 0);

    tabuleiro.bot[linha][coluna] = valor;

    let index = linha * 3 + coluna;
    espacos[index].textContent = tabuleiro.bot[linha][coluna];
  }else{
    const joga = document.querySelectorAll(".btnUser");
    joga.forEach((btn) => {
    btn.addEventListener("click", function(event){
        espacos2[event.target.dataset.espacos].textContent = valor;
        console.log(event.target.dataset.espacos);
    });
});
  }
}

function comparaElimina(turnoJogador) {

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (tabuleiro.player[j][i] === tabuleiro.bot[j][i] && turnoJogador===true) {
          tabuleiro.bot[j][i] = 0;
        }
        if (tabuleiro.bot[j][i] === tabuleiro.player[j][i] && turnoJogador===false) {
            tabuleiro.player[j][i] = 0;
      }
    }
  }
}
export { giraDado,getTabuleiro,jogada, comparaElimina};
