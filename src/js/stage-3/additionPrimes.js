//Написать функцию, которая суммирует все простые числа до n (аргумент функции)
export const additionPrimes = (n) =>{
    let arrayNumbers = Array.from(Array(n).keys());
    arrayNumbers.splice(0,2);

    console.log(arrayNumbers);

    return arrayNumbers.reduce((previousValue, currentValue) => {
        if (arrayNumbers.some((value,index)=>currentValue % value !== 0)) {
            console.log(currentValue);
            return previousValue;
        }

        return previousValue + currentValue;
    });
};
