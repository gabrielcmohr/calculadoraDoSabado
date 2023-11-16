let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let resultado = document.querySelector("#resultado");

let btSomar = document.getElementById("btSomar");
let btSubtrair = document.getElementById("btSubtrair");
let btMultiplicar = document.getElementById("btMultiplicar");
let btDivisao = document.getElementById("btDivisao");

btSomar.addEventListener("click", function () {somar(Number(valor1.value), Number(valor2.value))});
btSubtrair.addEventListener("click", function () {subtrair(Number(valor1.value), Number(valor2.value))});
btMultiplicar.addEventListener("click", function () {multiplicar(Number(valor1.value), Number(valor2.value))})

function somar(a, b) {
    let soma = a + b;
    resultado.innerHTML = soma;
}
function subtrair(a, b) {
    let subtrai = a - b;
    resultado.innerHTML = subtrai;
}
function multiplicar(a, b) {
    let multiplica = a * b;
    resultado.innerHTML = multiplica;
}
function divisao() {
    let dividir = valor1.value / valor2.value;
    resultado.innerHTML = dividir;
}
let idioma = document.getElementById("idioma");
idioma.addEventListener("change", function () {
    if (this.value == "br") {
        btSomar.value = "Somar";
        btSubtrair.value = "Subtrair";
        btMultiplicar.value = "Multiplicar";
        btDivisao.value = "Divisão";
    }
    else if (this.value == "en") {
        alert('oi')
        btSomar.value = "Add";
    }
})