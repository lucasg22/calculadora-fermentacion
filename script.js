
function calcular(harina, hidratacion, fermentacion, temperatura) {
  let resultado = 0
  let multiplicador = 25
  resultado = (((harina * 23) / fermentacion) / hidratacion) / temperatura

  return Math.ceil(resultado)
}

function iniciarCalcular() {
  console.log("inicio el calculo")
  let harina = document.getElementById("harina").value
  let hidratacion = document.getElementById("hidratacion").value
  let fermentacion = document.getElementById("fermentacion").value
  let temperatura = document.getElementById("temperatura").value
  let resultado = calcular(harina, hidratacion, fermentacion, temperatura)

  let esLevaduraInstantanea = document.getElementById("checkboxLevadura").checked
  if (esLevaduraInstantanea) { resultado = Math.ceil(resultado / 3) }

  document.getElementById("resultado").innerHTML = `La levadura necesaria es ${resultado} Grs.`

}
function limpiar() {
  document.getElementById("harina").value = 0
  document.getElementById("hidratacion").value = 0
  document.getElementById("fermentacion").value = 0
  document.getElementById("temperatura").value = 0
}
document.getElementById("iniciarCalculo").addEventListener('click', iniciarCalcular)
document.getElementById("limpiar").addEventListener('click', limpiar)