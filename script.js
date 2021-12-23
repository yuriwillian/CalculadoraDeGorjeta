function calcular() {
    let ctaValor = document.getElementById("ctaValor")
    let valor = document.getElementById("valor")
    let ctaPorcentagem = document.getElementById("ctaPorcentagem")
    let porcentagem = document.getElementById("porcentagem")
    let ctaCalcular = document.getElementById("ctaCalcular")
    let calcular = document.getElementById("calcular")
    let resultado = valor.value * (porcentagem.value / 100)

    valor.value = ""
    porcentagem.value = ""
    ctaCalcular.style.font = "normal 22pt Bungee"
    ctaCalcular.style.color = "green"
    ctaCalcular.innerText = `Total: R$${resultado} de gorjeta.`
    valor.focus()

}