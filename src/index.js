import analyzer from "./analyzer.js";

const textarea = document.querySelector("textarea");
textarea.addEventListener("input", (evento) => {
  const text = evento.target.value

  //código de la función getCharacterCount, RECUENTO DE CARACTERES 
  const suma = analyzer.getCharacterCount(text);
  const caracteresSpan = document.getElementById("caracteres");
  caracteresSpan.innerHTML = suma

  //código de la función getCharacterCountExcluidingSpaces, RECUENTO DE CARACTERES SIN ESPACIOS 
  const recuento = analyzer.getCharacterCountExcludingSpaces(text);
  const caracteresSinEspacioSpan = document.getElementById("caracteresSinEspacio")
  caracteresSinEspacioSpan.innerHTML = recuento

  //código de la función getWordCount, RECUENTO DE PALABRAS
  const conteo = analyzer.getWordCount(text);
  const palabrasSpan = document.getElementById("palabras");
  palabrasSpan.innerHTML = conteo

  //código de la función getNumberCount CONTEO DE NUMEROS
  const conteoNumeros = analyzer.getNumberCount(text);
  const numerosSpan = document.getElementById("numeros");
  numerosSpan.innerHTML = conteoNumeros

  //código de la función getNumberSum SUMA DE NUMEROS
  const sumaNumeros = analyzer.getNumberSum(text);
  const sumaNumerosSpan = document.getElementById("sumaNumeros");
  sumaNumerosSpan.innerHTML = sumaNumeros

  //código de la función getAverageWordLength CALCULO DE LONGITUD PROMEDIO DE LAS PALABRAS 
  const calcularLongitudes = analyzer.getAverageWordLength(text);
  const promedioLongitudSpan = document.getElementById("promedioLongitud");
  promedioLongitudSpan.innerHTML = calcularLongitudes
})

//borrar el contenido de la caja de texto
//function limpiarTexto() {
//textarea.value = ""; // borrar el contenido de la caja de texto
//}
//botonLimpiar.addEventListener("click", limpiarTexto);
