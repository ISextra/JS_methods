
//Написать функцию, которая на вход принимает целое число и возвращает факториал
// этого числа.
function func1 (num) {
    for (let i = num-1;i>1;i--) {
        num *= i;
    }
    console.log(num);
}

//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
function func2 (str) {
    let length = 0;
    let maxlength = 0;
    for (let i = 0; i<str.length;i++) {
        length++;
        if ((str[i+1] === " ")||(str[i+1] === undefined)){
            if (length > maxlength) {
                maxlength = length;
            }
            i++;
            length=0;
        }
    }
    console.log(maxlength);
}

//Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.
function func3 (arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        let maxnum = arr[i][0];
        for (let j = 0; j < arr[i].length;j++){
            if (maxnum < arr[i][j]) {
                maxnum = arr[i][j];
            }
        }
        arr1.push(maxnum);
    }
    console.log(arr1);
}


//func1(4);
//func2("hi world");
func3([[1, 2, 3], [4, 5], [6, 7, 8, 9]]);