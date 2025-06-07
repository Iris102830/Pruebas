// 1. Función para sumar dos números
function sumar(a, b) {
  return a + b;
}

// 2. Función para restar dos números
function restar(a, b) {
  return a - b;
}

// 3. Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// 4. Función para dividir dos números
function dividir(a, b) {
  if (b === 0) {
    return 'Error: División por cero';
  }
  return a / b;
}

// 5. Función para verificar si un número es par
function esPar(numero) {
  return numero % 2 === 0;
}

// 6. Función para obtener el mayor de dos números
function mayorDeDos(a, b) {
  return a > b ? a : b;
}

// 7. Función para convertir una cadena a mayúsculas
function convertirAMayusculas(cadena) {
  return cadena.toUpperCase();
}

// 8. Función para verificar si una cadena contiene una subcadena
function contieneSubcadena(cadena, subcadena) {
  return cadena.includes(subcadena);
}

// 9. Función para obtener la longitud de un array
function longitudArray(arr) {
  return arr.length;
}

// 10. Función para verificar si un valor es nulo
function esNulo(valor) {
  return valor === null;
}

module.exports = {
  sumar,
  restar,
  multiplicar,
  dividir,
  esPar,
  mayorDeDos,
  convertirAMayusculas,
  contieneSubcadena,
  longitudArray,
  esNulo
};
