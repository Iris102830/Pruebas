// funciones.test.js
const {
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
} = require('./funciones');

// Grupo de pruebas para la función sumar
describe('sumar', () => {
  test('debería sumar dos números positivos correctamente', () => {
    expect(sumar(2, 3)).toBe(5);
  });
});

// Grupo de pruebas para la función restar
describe('restar', () => {
  test('debería restar dos números correctamente', () => {
    expect(restar(5, 2)).toBe(3);
  });
});

// Grupo de pruebas para la función multiplicar
describe('multiplicar', () => {
  test('debería multiplicar dos números correctamente', () => {
    expect(multiplicar(4, 3)).toBe(12);
  });
});

// Grupo de pruebas para la función dividir
describe('dividir', () => {
  test('debería dividir dos números correctamente', () => {
    expect(dividir(10, 2)).toBe(5);
  });
});

// Grupo de pruebas para la función esPar
describe('esPar', () => {
  test('debería retornar true si el número es par', () => {
    expect(esPar(4)).toBe(true);
  });
});

// Grupo de pruebas para la función mayorDeDos
describe('mayorDeDos', () => {
  test('debería retornar el número mayor (a > b)', () => {
    expect(mayorDeDos(10, 5)).toBe(10);
  });
});

// Grupo de pruebas para la función convertirAMayusculas
describe('convertirAMayusculas', () => {
  test('debería convertir una cadena a mayúsculas', () => {
    expect(convertirAMayusculas('hola')).toBe('HOLA');
  });
});

// Grupo de pruebas para la función contieneSubcadena
describe('contieneSubcadena', () => {
  test('debería retornar true si la cadena contiene la subcadena', () => {
    expect(contieneSubcadena('mundo javascript', 'javascript')).toBe(true);
  });
});

// Grupo de pruebas para la función longitudArray
describe('longitudArray', () => {
  test('debería retornar la longitud correcta de un array', () => {
    expect(longitudArray([1, 2, 3, 4])).toBe(4);
  });
});

// Grupo de pruebas para la función esNulo
describe('esNulo', () => {
  test('debería retornar true si el valor es nulo', () => {
    expect(esNulo(null)).toBe(true);
  });
});
