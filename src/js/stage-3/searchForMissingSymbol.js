//Написать функцию, которая на вход принимает последовательность букв и ищет
// пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
// undefined. Например: fearNotLetter("abce") должна вернуть "d"
export const searchForMissingSymbol = (str) => {
    let index = 0;
    let arr = [];
    while (index < str.length-1) {
        if (str.charCodeAt(index+1)-str.charCodeAt(index)>1) {
            let a = str.charCodeAt(index);

            while (str.charCodeAt(index+1) > a+1) {
                a++;
                arr.push(String.fromCharCode(a));
            }
        }

        index++;
    }

    if (arr.join('') === '') {
        return undefined;
    }

    return arr.join('');
};