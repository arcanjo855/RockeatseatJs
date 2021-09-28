/* ### Transformar notas escolares

        Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

    * De 90 para cima - A
    * Entre 80 - 89   - B
    * Entre 70 - 79   - C
    * Entre 60 - 69   - D
    * Menor que 60    - F

*/

function getNota(nota) {
  const notaA = nota >= 90 && nota <= 100;
  const notaB = nota >= 80 && nota <= 89;
  const notaC = nota >= 70 && nota <= 79;
  const notaD = nota >= 60 && nota <= 69;
  const notaF = nota < 60 && nota >= 0;

  let notaFinal;

  if (notaA) {
    notaFinal = 'A';
  } else if (notaB) {
    notaFinal = 'B';
  } else if (notaC) {
    notaFinal = 'C';
  } else if (notaD) {
    notaFinal = 'D';
  } else if (notaF) {
    notaFinal = 'F';
  } else {
    notaFinal = 'nota invalida';
  }
  return notaFinal; // vai ser substituida por uma string de letra entre A e F ou nota invalida
}

console.log(getNota(10));
console.log(getNota(70));
console.log(getNota(99));
