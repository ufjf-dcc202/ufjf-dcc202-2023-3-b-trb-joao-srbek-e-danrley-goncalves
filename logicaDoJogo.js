import {mostraNaTela} from './Tela.js'
 
const tabuleiro = {
  'bot': [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  'player': [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0] 
]
}

let xBot=0;
let yBot=0;
let xPlayer=0;
let yPlayer=0;

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
    }while (tabuleiro.bot[linha][coluna] !== null);

    tabuleiro.bot[linha][coluna] = valor;
    yBot=coluna;
    xBot=linha;
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
        console.log(`${espacosInt}`);
        switch(espacosInt){
          case 0: tabuleiro.player[0][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][0];
          xPlayer=0;
          yPlayer=0;
          break;
          case 1: tabuleiro.player[0][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][1];
          xPlayer=0;
          yPlayer=1;
          break;
          case 2: tabuleiro.player[0][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[0][2];
          xPlayer=0;
          yPlayer=2;
          break;
          case 3: tabuleiro.player[1][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][0];
          xPlayer=1;
          yPlayer=0;
          break;
          case 4: tabuleiro.player[1][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][1];
          xPlayer=1;
          yPlayer=1;
          break;
          case 5: tabuleiro.player[1][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[1][2];
          xPlayer=1;
          yPlayer=2;
          break;
          case 6: tabuleiro.player[2][0] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][0];
          xPlayer=2;
          yPlayer=0;
          break;
          case 7: tabuleiro.player[2][1] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][1];
          xPlayer=2;
          yPlayer=1;
          break;
          default: tabuleiro.player[2][2] = valor;
          espacos2[event.target.dataset.espacos].textContent = tabuleiro.player[2][2];
          xPlayer=2;
          yPlayer=2;
          break;
        }
    });
});
  }
}

function somaDasColunas(posicao,posiTotal,somaColuna,somaTotBot,somaTotPlayer,turnoAtual) {
  if(turnoAtual === false){
    for(let j=0;j<3;j++){
      somaColuna = 0;
      if(tabuleiro.bot[0][j]!==null || tabuleiro.bot[1][j]!==null || tabuleiro.bot[2][j]!==null){
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
      somaTotBot += somaColuna;
    posicao[j].textContent= somaColuna;
    posiTotal[0].textContent = somaTotBot;
    }
  }else{
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
      somaTotPlayer += somaColuna;
    posicao[j+3].textContent= somaColuna;
    posiTotal[1].textContent = somaTotPlayer;
    }
  }
}

function comparaElimina(localBot,localPlayer, turnoJoga) {
  if(turnoJoga === false){
    for(let i=0;i<3;i++){
      if(tabuleiro.bot[xBot][yBot] === tabuleiro.player[i][yBot]){
        console.log(`${turnoJoga}`);
        tabuleiro.player[i][yBot] = 0;
        localPlayer[i*3+yBot].textContent = null;
      }
    }
  }else{
    for(let i=0;i<3;i++){
      if(tabuleiro.player[xPlayer][yPlayer] === tabuleiro.bot[i][yPlayer]){
        console.log(`${turnoJoga}`);
        tabuleiro.bot[i][yPlayer] = null;
        localBot[i*3+yPlayer].textContent = null;
      }
    }
  }
}

export {giraDado,getTabuleiro,jogada,somaDasColunas,comparaElimina};
