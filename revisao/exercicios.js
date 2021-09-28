// 1. declare uma variavel de nome weight
// var weight

// 2. que tipo de dado é a variavel acima?
// console.log(typeof weight)

/*
    3. Declare uma variável e atribua valores para cada um dos valores:
        *name: String
        *age: Number (integer)
        *stars: Number (float)
        *isSubscribed: Boolean

*/
// let name = "Rafa"
// let age = 20
// let stars = 2.2
// let isSubscribed = true

/*
    4. A variavel student abaixo é de que tipo de dado?

    4.1 Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2 Mostre no console a seguinte mensagem:
        <name> de idade <age> pesa <weight> kg.
*/

const student = {
  name: 'Rafa',
  age: 20,
  stars: 2.2,
  isSubscribed: true,
  weight: 70,
};

// console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg.`)

/*
    5. declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio

    */

let students = [];

/*
    6. Reatribua o valor da variavel acima, colocando dentro o objeto student da questão 4. (nao copia e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/

students = [student];

/*
    7. Coloque no console o valor da posição zero do Array acima
*/

// console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/

const john = {
  name: 'John',
  age: 33,
  weight: 88,
  isSubscribed: true,
};
students = [student, john];

console.log(students);

/*
    9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e porque? após sua resposta, rode o código e veja se vc acertou.

    console.log(a)
    var a = 1
*/
console.log(a);
var a = 1;
