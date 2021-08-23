//M1 solução 3 ex1
function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}
function escreveNaTela(frase) {
  document.write(frase)
  pulaLinha()
}
//escreveNaTela('Olá mundo!')

//M1 solução 2 ex3
var inputName = document.getElementById('nome')
var input = document.getElementById('numero')

function confirmaResposta() {
  var divConfirmaResposta = document.getElementById('confirmaResposta')
  var nome = inputName.value
  var numeroGuardado = input.value

  var html = 'Olá ' + nome + '<br>' + 'O número guardado foi ' + numeroGuardado

  divConfirmaResposta.innerHTML = html
}

function aceitaResposta() {
  var aceitaResposta = prompt(
    'Você tem certeza de que as informações estão corretas?'
  )
  if (aceitaResposta == 'sim') {
    confirmaResposta()
  } else {
    alert('Por favor preencha os campos novamente.')
  }
}
var button = document.getElementById('botaoEnviar')

button.onclick = aceitaResposta

//M2 solução 3 ex1
// - Usando a sulução 2 ex3 para dar a resposta final
var inputPrimeiroNumero = document.getElementById('primeiroNumero')
var inputSegundoNumero = document.getElementById('segundoNumero')

var checkboxSoma = document.getElementById('soma')
var checkboxSubtracao = document.getElementById('subtracao')
var checkboxMultiplicacao = document.getElementById('multiplicacao')
var checkboxDivisao = document.getElementById('divisao')
var checkboxPotencia = document.getElementById('potencia')
var checkboxRaiz = document.getElementById('raiz')

function calculaRaiz() {
  var primeiroNumero = parseFloat(inputPrimeiroNumero.value)
  var segundoNumero = parseFloat(inputSegundoNumero.value)

  var raizPrimeiroNumero = Math.sqrt(primeiroNumero)
  var raizSegundoNumero = Math.sqrt(segundoNumero)

  var htmlPrimeiraRaiz =
    'A raiz quadrada do ' + primeiroNumero + ' é ' + raizPrimeiroNumero
  var htmlSegundaRaiz =
    'A raiz quadrada do ' + segundoNumero + ' é ' + raizSegundoNumero

  divResultado.innerHTML = htmlPrimeiraRaiz
  divResultado.innerHTML = htmlSegundaRaiz
}

function calcula() {
  var primeiroNumero = parseFloat(inputPrimeiroNumero.value)
  var segundoNumero = parseFloat(inputSegundoNumero.value)

  escreveNaTela('Primeiro número escolhido: ' + primeiroNumero)
  escreveNaTela('Segundo número escolhido: ' + segundoNumero)

  if (checkboxRaiz.checked) {
    var raizPrimeiroNumero = Math.sqrt(primeiroNumero)
    var raizSegundoNumero = Math.sqrt(segundoNumero)

    escreveNaTela(
      'A raiz quadrada do ' + primeiroNumero + ' é ' + raizPrimeiroNumero
    )
    escreveNaTela(
      'A raiz quadrada do ' + segundoNumero + ' é ' + raizSegundoNumero
    )
  }
  if (checkboxPotencia.checked) {
    var resultadoPotencia = primeiroNumero ** segundoNumero
    escreveNaTela(
      'O número ' +
        primeiroNumero +
        ' elevado a ' +
        segundoNumero +
        ' potêcia é ' +
        resultadoPotencia
    )
  }
  if (segundoNumero == 0 && checkboxDivisao.checked) {
    alert('Não é possível realizar essa operação')
  } else if (checkboxDivisao.checked) {
    var resultadoDivisao = primeiroNumero / segundoNumero
    escreveNaTela(
      primeiroNumero + ' / ' + segundoNumero + ' = ' + resultadoDivisao
    )
  }
  if (checkboxSoma.checked) {
    var resultadoSoma = primeiroNumero + segundoNumero
    escreveNaTela(
      primeiroNumero + ' + ' + segundoNumero + ' = ' + resultadoSoma
    )
  }
  if (checkboxSubtracao.checked) {
    var resultadoSubtracao = primeiroNumero - segundoNumero
    escreveNaTela(
      primeiroNumero + ' - ' + segundoNumero + ' = ' + resultadoSubtracao
    )
  }
  if (checkboxMultiplicacao.checked) {
    var resultadoMultiplicacao = primeiroNumero * segundoNumero
    escreveNaTela(
      primeiroNumero + ' X   ' + segundoNumero + ' = ' + resultadoMultiplicacao
    )
  }
}

var button = document.getElementById('calcular')

button.onclick = calcula

var radioSim = document.getElementById('sim')
var inputQuantidadeNumeros = document.getElementById('quantidadeNumeros')

function calulaMedia() {
  var quantidadeNumeros = parseFloat(inputQuantidadeNumeros.value)
  var termos = []
  var contador = 1

  if (radioSim.checked) {
    while (contador <= quantidadeNumeros) {
      var numero = parseFloat(prompt('Digite o numero ' + contador))
      termos.push(numero)
      contador++
    }
    var somaTermos = 0
    for (i = 0; i < termos.length; i++) {
      var resultadoMedia = (somaTermos += termos[i]) / quantidadeNumeros
    }
    escreveNaTela('A média é ' + resultadoMedia)
  }
}

var button = document.getElementById('calculaMedia')

button.onclick = calulaMedia
