//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
export const getMaxWordLengthOfString = str => {
    let maxlength = 0;
    const str1 = str.split(" ");

    maxlength = str1.reduce( (previous,current) => {
        if (current.length > previous) {
            return current.length;
        }

        return previous;
    },0);

    return maxlength;
};