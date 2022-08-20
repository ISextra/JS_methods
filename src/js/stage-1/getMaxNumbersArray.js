//Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.
export const getMaxNumbersArray = arr => {
    return arr.map( (value,index,arr) => {
        let maxvalue = arr[index][0];

        value.reduce( (previous,current) => {
            if (current > maxvalue) {
                maxvalue = current;
            }
            return maxvalue;
        });

        return maxvalue;
    });
};