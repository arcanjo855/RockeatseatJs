// estrutura de repetição

// For...in

const person = {
  name: 'john',
  age: 20,
  weight: 88.6,
};

for (const property in person) {
  console.log(property);
  console.log(person[property]);
}
