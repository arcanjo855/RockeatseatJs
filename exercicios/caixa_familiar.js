/* ### Sistema de gastos familiar

Crie um objeto que possuira 2 propriedades, Ambas do tipo array:
        * receitas: []
        * despesas: []

Agora, crie uma função que irá calcular o total de receitas e irá mostrar uma mensagem se a familia esta positivo ou negativo, seguido do valor do salvo

*/

const familia = {
  receita: [3890, 3343, 433],
  despesas: [908, 390, 3422, 3000],
};

function somar(array) {
  // cara isso demorou pra entrar na mente
  let total = 0;
  for (const value of array) {
    total += value; // faz a soma dos valores adicionado no array de cima mas ainda nao efetua a açao
  }
  return total;
}

function calcularBalanco() {
  // subtrai o valor do array de cima e faz o .log da subtraçao
  const calculoReceita = somar(familia.receita); // aqui a soma é efetuada
  const calcularDespesas = somar(familia.despesas);

  const total = calculoReceita - calcularDespesas; // subtrai o valor da raceita pelo de gastos
  const itsOk = total >= 0;
  let mensagemBalança = 'negativa';

  if (itsOk > 0) {
    mensagemBalança = 'possitva';
  }

  console.log(`A sua balança é ${mensagemBalança}`, `${total}`); // ele executa o log dentro dafunçao
}

calcularBalanco();
