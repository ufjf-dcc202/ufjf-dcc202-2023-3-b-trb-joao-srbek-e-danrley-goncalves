const tabuleiro = {
  'bot': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  'player': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
}

/*function trocaTurno(vezPlayer){
    if (vezPlayer === true) {
      vezPlayer = false;
    }else{
      vezPlayer = true;
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
      btn.disabled = false;
    btn.addEventListener("click", function(event){
        joga.forEach((outroBtn) => {
          if(outroBtn !==event.target){
            outroBtn.disabled = true;
          }
        });
        let espacosNum = event.target.dataset.espacos;
        let espacosInt = parseInt(espacosNum);
        switch(espacosInt){
          case 0: tabuleiro.player[0][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][0];
          break;
          case 1: tabuleiro.player[0][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][1];
          break;
          case 2: tabuleiro.player[0][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][2];
          break;
          case 3: tabuleiro.player[1][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][0];
          break;
          case 4: tabuleiro.player[1][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][1];
          break;
          case 5: tabuleiro.player[1][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][2];
          break;
          case 6: tabuleiro.player[2][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][0];
          break;
          case 7: tabuleiro.player[2][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][1];
          break;
          default: tabuleiro.player[2][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][2];
          break;
        }
    });
});
  }
}

function somaDasColunas(posicao,somaColuna,turnoAtual) {
  if(turnoAtual === false){
    for(let j=0;j<3;j++){
      somaColuna = 0;
      if(tabuleiro.bot[0][j]!==0 || tabuleiro.bot[1][j]!==0 || tabuleiro.bot[2][j]!==0){
        if(tabuleiro.bot[0][j]===tabuleiro.bot[1][j] && tabuleiro.bot[0][j]===tabuleiro.bot[2][j] && tabuleiro.bot[1][j]===tabuleiro.bot[2][j]){
          somaColuna = tabuleiro.bot[0][j]*3 + tabuleiro.bot[1][j]*3 + tabuleiro.bot[2][j]*3;
        }else if(tabuleiro.bot[0][j]===tabuleiro.bot[2][j]){
          somaColuna = tabuleiro.bot[0][j]*2 + tabuleiro.bot[1][j] + tabuleiro.bot[2][j]*2;
        }else if(tabuleiro.bot[1][j]===tabuleiro.bot[2][j]){
          somaColuna = tabuleiro.bot[0][j] + tabuleiro.bot[1][j]*2 + tabuleiro.bot[2][j]*2;
        }else if(tabuleiro.bot[0][j]===tabuleiro.bot[1][j]){
          somaColuna = tabuleiro.bot[0][j]*2 + tabuleiro.bot[1][j]*2 + tabuleiro.bot[2][j];
        }else{
          somaColuna = tabuleiro.bot[0][j] + tabuleiro.bot[1][j] + tabuleiro.bot[2][j];
        }
      }
    posicao[j].textContent= somaColuna;
    }
  }
  if(turnoAtual === true){
    for(let j=0;j<3;j++){
      somaColuna = 0;
      if(tabuleiro.player[0][j]!==0 || tabuleiro.player[1][j]!==0 || tabuleiro.player[2][j]!==0){
        if(tabuleiro.player[0][j]===tabuleiro.player[1][j] && tabuleiro.player[0][j]===tabuleiro.player[2][j] && tabuleiro.player[1][j]===tabuleiro.player[2][j]){
          somaColuna = tabuleiro.player[0][j]*3 + tabuleiro.player[1][j]*3 + tabuleiro.player[2][j]*3;
        }else if(tabuleiro.player[0][j]===tabuleiro.player[2][j]){ 
          somaColuna = tabuleiro.player[0][j]*2 + tabuleiro.player[1][j] + tabuleiro.player[2][j]*2;
        }else if(tabuleiro.player[1][j]===tabuleiro.player[2][j]){
          somaColuna = tabuleiro.player[0][j] + tabuleiro.player[1][j]*2 + tabuleiro.player[2][j]*2;
        }else if(tabuleiro.player[0][j]===tabuleiro.player[1][j]){
          somaColuna = tabuleiro.player[0][j]*2 + tabuleiro.player[1][j]*2 + tabuleiro.player[2][j];
        }else{
          somaColuna = tabuleiro.player[0][j] + tabuleiro.player[1][j] + tabuleiro.player[2][j];
        }
      }
    posicao[j+3].textContent= somaColuna;
    }
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
export { giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina};
