// identifique o erro e corrija o código a baixo

function verificarMaiorIdade(idade) {
  return idade >= 18 ? "Maior de idade" : "Menor de idade";
}

console.log("verificaMaiorIdade: ", verificarMaiorIdade(19));

//// complete o códigoFaça com que a variável arra tenha uma lista ordenada de de 10 posições de 0 a 9

function orderArray() {
  let arr = [1, 2, 3, 6, 7, 9];
  arr.unshift(0);
  arr.splice(4, 0, 4, 5);
  arr.splice(8, 0, 8);

  return arr;
}

console.log("orderArray: ", orderArray());

/// Substitua os dados do objeto reatribuído  e delete o campo idade sem alterar a declaração do mesmo
function meusDados() {
  let pessoa = {
    nome: "jhon doe",
    idade: "30",
    cidade: "New York",
  };

  delete pessoa.idade;
  pessoa.nome = "João Victor";
  pessoa.cidade = "Tapejara";

  return pessoa;
}

console.log("meusDados: ", meusDados());

// Manipule o Array para que ele traga as informações pedidas no objeto e atribua nas posições do objeto
// ex: ordemAlfabetica: animais.short...
function manipulaArray() {
  let animais = ["cacohrro", "gato", "abelha", "rato", "leão", "galinha"];

  let ordemAlfabetica = animais.sort();
  let primeiro = animais[0];
  let ultimo = animais[animais.length - 1];
  let tamanhoDaLista = animais.length;

  return {
    ordemAlfabetica,
    primeiro,
    ultimo,
    tamanhoDaLista,
  };
}

console.log("manipulaArray: ", manipulaArray());
