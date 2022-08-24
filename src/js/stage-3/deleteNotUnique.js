//8. Написать функцию, которая принимает два или более массивов и возвращает новый
// массив уникальных значений. Значения должны быть отсортированы по их
// первоначальному порядку.
export const deleteNotUnique = (...args) => {

    let result = args.reduce((previousValue, currentValue) => {
        return [...previousValue, ...currentValue];
    });

    console.log(result);
    // let arr = result.reduce((previous,current)=>{
    //     return {...previous, ...current}
    // })
    // console.log(arr);

    return [...new Set(result)];
}