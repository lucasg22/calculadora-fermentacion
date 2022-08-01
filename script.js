
function calcular(harina, hidratacion, fermentacion, temperatura) {
  let resultado = 0
  let multiplicador = 25
  resultado = (((harina * multiplicador) / fermentacion) / hidratacion) / temperatura

  return Math.ceil(resultado)
}

function iniciarCalcular() {

  

  console.log("inicio el calculo")
  let harina = parseInt(document.getElementById("harina").value)
  let hidratacion = parseInt(document.getElementById("hidratacion").value)
  let fermentacion = parseInt(document.getElementById("fermentacion").value)
  let temperatura = parseInt(document.getElementById("temperatura").value)

  if (harina !== 0 && hidratacion !== 0 && fermentacion !== 0 && temperatura !== 0) {
    let resultado
    resultado = calcular(harina, hidratacion, fermentacion, temperatura)
    let esLevaduraInstantanea = document.getElementById("checkboxLevadura").checked
    
    if (esLevaduraInstantanea) { resultado = Math.ceil(resultado / 3) }

    document.getElementById("resultado").innerHTML = `La levadura necesaria es ${resultado} Grs.`

  }
  else {
    alert("falta algun dato")
  }


}
function limpiar() {
  document.getElementById("harina").value = 0
  document.getElementById("hidratacion").value = 0
  document.getElementById("fermentacion").value = 0
  document.getElementById("temperatura").value = 0
}
limpiar()
document.getElementById("iniciarCalculo").addEventListener('click', iniciarCalcular)
document.getElementById("limpiar").addEventListener('click', limpiar)