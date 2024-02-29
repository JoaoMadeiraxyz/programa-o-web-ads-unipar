const data = require("./data.json");

// function filtrarMenoresDeIdade() {
//   return (menores = data.filter((pessoa) => pessoa.age < 18)).length;
// }

// console.log(filtrarMenoresDeIdade());

function calculaIMC(altura, peso) {
  return peso * (altura * altura);
}

function filtrarMagreza() {
  return data.filter(
    (pessoa) => calculaIMC(pessoa.height, pessoa.weight) <= 18.5
  );
}

function filtrarNormal() {
  return data.filter(
    (pessoa) =>
      calculaIMC(pessoa.height, pessoa.weight) > 18.5 &&
      calculaIMC(pessoa.height, pessoa.weight) <= 24.9
  );
}

function filtrarSobrepeso() {
  return data.filter(
    (pessoa) => calculaIMC(pessoa.height, pessoa.weight) >= 25
  );
}

console.log("Magreza: ", filtrarMagreza().length);
console.log("Normal: ", filtrarNormal().length);
console.log("Sobrepeso: ", filtrarSobrepeso().length);
