const analyzer = {

  getCharacterCount: (text) => {
    //Conteo de caracteres
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const textoSinEspacios = text.replace(/\s/g, "").replace(/[^\w\s]|_/g,"")
    const CantidadCaracteres = textoSinEspacios.length;
    return CantidadCaracteres;
  },
  getWordCount: (text) => {
    // conteo de palabras 
    return text.trim().split(" ").length;
  },
  getNumberCount: (text) => {
    //conteo de números
    //const contarNumerosEnTexto = (text)
    let contador = 0;
    const palabras = text.split(" ");
    for (let i = 0; i < palabras.length; i++) {
      if (!isNaN(palabras[i])) {
        contador = contador+1
        //contarNumerosEnTexto;
      }
    }
    return contador;
  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const sumaDeNumeros = text.split(' ');
    let sumaNumeros = 0;
    for (let i = 0; i < sumaDeNumeros.length; i++) {
   
      if (!isNaN(sumaDeNumeros[i])) {
        sumaNumeros = sumaNumeros + parseFloat(sumaDeNumeros[i]);
      }

    }
    return sumaNumeros;
  },

  getAverageWordLength: (text) => {
    const longitudMedia = text.split(' ');
    let sumaLongitudMedia = 0;
    for (let i = 0; i < longitudMedia.length; i++) {
      sumaLongitudMedia += longitudMedia[i].length;
    }
    return Math.round(sumaLongitudMedia / longitudMedia.length * 100) / 100;
    //return sumaLongitudMedia;
  },
}
export default analyzer
