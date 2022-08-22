//8. Написать функцию, которая принимает два или более массивов и возвращает новый
// массив уникальных значений. Значения должны быть отсортированы по их
// первоначальному порядку.
export const findNotEnteringE = (...args) => {
    let arr = args.flat(Infinity);
    let arr1 = [];

    arr.forEach((value,index)=> {
        let a = value;

        arr.splice(index,1,undefined);

        if (!arr.includes(a)) {
            arr1.push(a);
        }

        arr.splice(index,1,a);
    });

    return arr1;
}