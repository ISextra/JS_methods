//8. Написать функцию, которая принимает два или более массивов и возвращает новый
// массив уникальных значений. Значения должны быть отсортированы по их
// первоначальному порядку.
export const deleteNotUnique = (...args) => {
    const merge = args.reduce((previousValue, currentValue) => {
        return [...previousValue, ...currentValue];
    });

    const arrayToString = merge.map(item => JSON.stringify(item));
    const unique = [...new Set(arrayToString)];

    return unique.map(item => JSON.parse(item));
}