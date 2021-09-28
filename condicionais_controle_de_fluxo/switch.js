// switch

/* let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo para expression b
        console.log('b')
        break
    default :
        console.log('default')
        break

} */

// calculadora foda

function calculadora(number1, operator, number2) {
  let result = 0;

  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    case '/':
      result = number1 / number2;
      break;
    default:
      console.log('nao implementamos ainda');
  }

  return result;
}

console.log(calculadora(33, '-', 3));
