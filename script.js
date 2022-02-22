//calculadora-pingback

const resultado = document.querySelector(".result");
const confirma = document.querySelector(".igual");

function insert(valor) {
  resultado.innerHTML += valor;
}

function clean() {
  resultado.innerHTML = "";
}

function backspace() {
  if (resultado.textContent) {
    let result = resultado.innerHTML;
    resultado.innerHTML = result.substring(0, result.length - 1);
  }
}

function retornaResultado() {
  if (resultado.innerHTML != "Erro") {
    resultado.innerHTML = eval(resultado.innerHTML);
  }
}
