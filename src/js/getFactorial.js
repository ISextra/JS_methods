//Написать функцию, которая на вход принимает целое число и возвращает факториал
// этого числа.
let getFactorial = num => {
    if (!num) return 1;
    for (let i = num-1;i>1;i--) {
        num *= i;
    }

    return num ;
};
//module.exports = getFactorial;