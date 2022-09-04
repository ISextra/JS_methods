//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
export const additionPrimes = (n) => {
    const arrayNumbers = Array.from(Array(n).keys());

    arrayNumbers.splice(0, 2);

    return arrayNumbers.reduce((previousValue, currentValue) => {//проход по всем элементам
        let counterOfPreviousValues = 2;

        while (counterOfPreviousValues < currentValue) {
            if (currentValue % counterOfPreviousValues === 0){
                return previousValue;
            }

            counterOfPreviousValues++;
        }

        return previousValue + currentValue;
    }, 0);
};
