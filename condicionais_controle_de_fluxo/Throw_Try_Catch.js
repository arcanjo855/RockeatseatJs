// throw

function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é necessario';
  }
  console.log('depois do erro');
}

// try...catch

try {
  sayMyName();
} catch (e) {
  console.log(e);
}
