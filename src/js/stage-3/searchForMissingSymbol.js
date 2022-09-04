//Написать функцию, которая на вход принимает последовательность букв и ищет
// пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
// undefined. Например: fearNotLetter("abce") должна вернуть "d"
export const searchForMissingSymbol = (str) => {
    let index = 0;
    const result = [];

    while (index < str.length - 1) { //пока не пройдем по всем элементам str
        if (str.charCodeAt(index + 1) - str.charCodeAt(index) > 1) { //если разница в кодах след и текущего символа больше 1 (идут не по порядку)
            let symbolCode = str.charCodeAt(index); //запиминаем код текущего символа

            while (symbolCode + 1 < str.charCodeAt(index + 1)) { //пока не дойдем до кода следующего символа
                symbolCode++;//увеличиваем код символа
                result.push(String.fromCharCode(symbolCode)); //добавляем символ по коду в результирующую строку
            }
        }

        index++;//переходим к следующему элементу str
    }

    if (result.join('') === '') { //если ни одного символа не было добавлено
        return undefined; //возвращаем undefined
    }

    return result.join('');
};

//переделал основной цикл через reduce
export const searchForMissingSymbolAlt = (str) => {
    const arrayStr = str.split("");

    const result = arrayStr.reduce((prevValue, value) => { //пока не пройдем по всем элементам arrayStr
        if ((value.charCodeAt(0) - prevValue.charCodeAt(0)) > 1) { //если разница в кодах текушего и предидущего символа больше 1 (идут не по порядку)
            let symbolCode = prevValue.charCodeAt(0); //запиминаем код предидущего символа
            let segmentSymbols = '';

            while (symbolCode + 1 < value.charCodeAt(0)) { //пока не дойдем до кода текущего символа
                symbolCode++;//увеличиваем код символа
                segmentSymbols = `${segmentSymbols}${String.fromCharCode(symbolCode)}`; //добавляем символ по коду в результирующую строку
            }

            return [...segmentSymbols];
        }

        return value; //перезаписываем предидущий символ
    });
console.log(result);
    if (result.length < 1) { //если ни одного символа не было добавлено
        return; //возвращаем undefined
    }

    return result.join('');
};