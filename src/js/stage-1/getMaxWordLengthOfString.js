//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
export let getMaxWordLengthOfString = str => {
    let maxlength = 0;
    const str1 = str.split(" ");

    str1.map(function callback(value) {
        if (value.length > maxlength) {
            maxlength = value.length;
        }
    });

    return maxlength;
};