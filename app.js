function exibeOpcaoComputador(opcao) {
    if (opcao == 0) {
      return "PEDRA";
    } else if (opcao == 1) {
      return "PAPEL";
    } else {
      return "TESOURA";
    }
  }
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function Jogar() {
    var elementoOIpcoes = document.getElementById("opcoes");
    var opcaoJogador = parseInt(elementoOIpcoes.value);
    var opcaoComputador = getRandomInt(0, 3);
    var elementoResultado = document.getElementById("resultado");
  
    if (opcaoComputador == opcaoJogador) {
      elementoResultado.innerHTML =
        "O COMPUTADOR ESCOLHEU " +
        exibeOpcaoComputador(opcaoComputador) +
        ", EMPATE";
    } else if (
      (opcaoJogador == 0 && opcaoComputador == 1) ||
      (opcaoJogador == 1 && opcaoComputador == 2) ||
      (opcaoJogador == 2 && opcaoComputador == 0)
    ) {
      elementoResultado.innerHTML =
        "O COMPUTADOR ESCOLHEU " +
        exibeOpcaoComputador(opcaoComputador) +
        ", VOCÊ PERDEU";
    } else {
      elementoResultado.innerHTML =
        "O COMPUTADOR ESCOLHEU " +
        exibeOpcaoComputador(opcaoComputador) +
        ", VOCÊ GANHOU";
    }
  }
  