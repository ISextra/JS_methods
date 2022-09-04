//Написать функцию, которая заменяет символы &, <, >, "(двойные кавычки),
// и ‘(апостроф) в строке их соответствующим HTML - кодом.
export const replaceSpecialCharacters = (str) => {
    const specialChar = {
        value: ["\&", "\<", "\>", "\"", "\'"],
        html: ["&amp", "&lt", "&gt", "&quot", "&apos"]
    };
    const arrayOfSplitStr = str.split("");

    const result = arrayOfSplitStr.map((value) => {
        if (specialChar.value.indexOf(value) > -1) {
            return specialChar.html[specialChar.value.indexOf(value)];
        }

        return value;
    });

    return result.join('');
};