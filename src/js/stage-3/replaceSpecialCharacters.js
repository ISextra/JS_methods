//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
// и ‘(апостроф) в строке их соответствующим HTML - кодом.
export const replaceSpecialCharacters = (str) => {
    const specChar = {
        value: ["\&", "\<", "\>", "\"", "\'"],
        html: ["&amp", "&lt", "&gt", "&quot", "&apos"]
    };
    let arr1 = str.split("");

    arr1.forEach((value,index) => {
        if (specChar.value.indexOf(value) > -1) {
            arr1.splice(index,1,specChar.html[specChar.value.indexOf(value)]) ;
        }
    });

    return arr1.join('');
};