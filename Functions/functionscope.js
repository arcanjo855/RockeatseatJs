// function scope
let subject;

function creatThink() {
  subject = 'study';
  return subject;
}

console.log(subject);
console.log(creatThink(subject));
console.log(subject);
