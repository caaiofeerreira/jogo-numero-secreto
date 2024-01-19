let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag,texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
};

function msgInicial(){
  exibirTextoNaTela('h1','Jogo do numero secreto');
  exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
};
msgInicial();


function verificarChute(){
  let chute = document.querySelector('input').value;

  if(chute==numeroSecreto){
    let palavraTentativa = tentativas > 1 ?'tentativas' : 'tentativa';
    let msgTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}.`;

    exibirTextoNaTela('h1','Parabéns!');
    exibirTextoNaTela('p', msgTentativas);

    document.getElementById('reiniciar').removeAttribute('disabled');

  } else{
      if(chute > numeroSecreto){
        exibirTextoNaTela('p' , 'O número secreto é menor');
      } else{
        exibirTextoNaTela('p' , 'O número secreto é maior.');
      };
      tentativas++;
      limparCampo();
  };
};

function gerarNumeroAleatorio(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
  let listaQuantidade = numerosSorteados.length;

  if(listaQuantidade == numeroLimite){
    numerosSorteados = [];
  };

  if(numerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
  } else{
    numerosSorteados.push(numeroEscolhido);
    return numeroEscolhido;
  };
};

function limparCampo(){
  chute = document.querySelector('input');
  chute.value = '';
};

function reiniciarJogo(){
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentativas = 1;
  msgInicial();
  document.getElementById('reiniciar').setAttribute('disabled', true);

};