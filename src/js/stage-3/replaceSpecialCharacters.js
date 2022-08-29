//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
// и ‘(апостроф) в строке их соответствующим HTML - кодом.
export const replaceSpecialCharacters = (str) => {
    const specChar = {
        value: ["\&", "\<", "\>", "\"", "\'"],
        html: ["&amp", "&lt", "&gt", "&quot", "&apos"]
    };
    const arr1 = str.split("");

    let result = arr1.map((value) => {
        if (specChar.value.indexOf(value) > -1) {
            return specChar.html[specChar.value.indexOf(value)];
        }

        return value;
    });

    return result.join('');
};