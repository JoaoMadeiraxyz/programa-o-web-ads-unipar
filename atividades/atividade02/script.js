const birthDia = "21";
const birthMes = "03";
const birthAno = "2004";
const userName = "João Victor";

function isMinor(name, dia, mes, ano) {
  let today = new Date();
  let birthDate = new Date(`${ano}-${mes}-${dia}`);
  let age = today.getFullYear() - birthDate.getFullYear();
  let monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (age < 18) {
    console.log(`${name} tem ${age} anos e é menor de idade.`);
  } else {
    console.log(`${name} tem ${age} anos e é maior de idade.`);
  }
}

isMinor(userName, birthDia, birthMes, birthAno);
