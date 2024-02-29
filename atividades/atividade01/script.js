function calculate(values, operation) {
    if (operation === "+") {
        return values.reduce((a, b) => a + b);
    } else if (operation === "-") {
        return values.reduce((a, b) => a - b);
    } else if (operation === "*") {
        return values.reduce((a, b) => a * b);
    } else if (operation === "/") {
        return values.reduce((a, b) => a / b);
    } 
}

const valuesToCalc = [5, 8, 6, 3];

console.log(calculate(valuesToCalc, "+")); // 22
console.log(calculate(valuesToCalc, "-")); // -12
console.log(calculate(valuesToCalc, "*"));  // 720
console.log(calculate(valuesToCalc, "/")); // 0.034722222222222224