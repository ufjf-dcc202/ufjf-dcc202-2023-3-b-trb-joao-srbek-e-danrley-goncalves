/*document.addEventListener("DOMContentLoaded", function () {
  var celTabela = document.querySelector("td");
  celTabela.forEach(function (celTabela) {
    celTabela.addEventListener("click", function () {
      selecionaCelula(celTabela);
    });
  });
});
*/

let player= {
  nome:"user",
  pontosBot:0,
  pontosUser:0,
  posicoesDotabuleiro: [1,2,3,4,5,6,7,8,9],
  dado: operacaoGira(), 
  vencendor: "",

  operacaoGira: function giraDado() {
    return Math.floor(Math.random() * 6) + 1;
  },

  operacaoTroca: function trocaQuemJoga(jogador) {
    if (player.nome == user) {
        return nome;
        nome = "bot";
    } else {
        return nome;
        nome = "user";
    }
  },

  operacaoJogada: function jogadaPlayerAtual(){
  let numero = this.dado;
  if(player.nome == "bot"){ 
    let tds = document.querySelectorAll('.espacosBot');
    let tdAleatoria = tds[Math.floor(Math.random() * tds.length)];
    tdAleatoria.textContent = numero;
  } else {
    document.getElementsByClassName('.espacosUser').textContent = numero;
  }
  }
}

export {player};
