//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
export const getMaxWordLengthOfString = str => {
    let maxlength = 0;
    const str1 = str.split(" ");

    str1.reduce( (previous,current) => {
        if (current.length > maxlength) {
            maxlength = current.length;
        }
    });

    return maxlength;
};