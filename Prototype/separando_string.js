/* Manipulando Strings

 Separa um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
 Depois disso, transforme o array em um texto e onde eram espaços, coloque _

 */

const phrase = 'Eu quero viver o Amor!';
const myArray = phrase.split(' ');
const phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore);
