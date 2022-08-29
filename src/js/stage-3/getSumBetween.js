//Написать функцию, которая принимает на вход массив из двух чисел и возвращает
// сумму этих двух чисел плюс сумму всех чисел между ними. Наименьшее число не
// всегда будет на первом месте. (Например sumAll([4, 1]) должен возвращать 10)
export const getSumBetween = (arr) => {
    arr.sort();

    let sum = 0;
    let [firstValue, secondValue] = arr;

    while (firstValue <= secondValue) {
        sum += firstValue;
        firstValue++;
    }

    return sum;
};