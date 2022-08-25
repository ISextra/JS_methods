//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
export const additionPrimes = (n) =>{
    let arrayNumbers = Array.from(Array(n).keys());
    arrayNumbers.splice(0,2);

    return arrayNumbers.reduce((previousValue, currentValue) => {//проход по всем элементам
        let index = 2;

        while (index < currentValue) {
            if (currentValue % index === 0){
                return previousValue;
            }

            index++;
        }

        return previousValue + currentValue;
    },0);
};
