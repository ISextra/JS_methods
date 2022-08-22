//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
export const additionPrimes = (n) =>{
    let arr = [];

    nextPrime:
        for (let i = 2; i <= n; i++) { // Для всех i...

            for (let j = 2; j < i; j++) { // проверить, делится ли число..
                if (i % j === 0) continue nextPrime; // не подходит, берём следующее
            }

            arr.push(i); // простое число
        }


    console.log(arr);
    return arr.reduce(function(previousValue, currentValue) {
        return previousValue + currentValue;
    });
};
