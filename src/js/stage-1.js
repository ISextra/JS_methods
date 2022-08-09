
//Написать функцию, которая на вход принимает целое число и возвращает факториал
// этого числа.
function func1 (num) {
    for (let i = num-1;i>1;i--) {
        num *= i;
    }
    return(num);
}

//Написать функцию, которая на вход принимает строку и возвращает длину самого
// длинного слова в этой строке
function func2 (str) {
    let maxlength = 0;
    let str1 = str.split(" ");
    str1.map(function callback(value) {
        if (value.length > maxlength) {
            maxlength = value.length
        }
    })
    return(maxlength);
}

//Написать функцию, которая на вход принимает массив, состоящий из массивов целых
// чисел (например: [[1, 2, 3], [4, 5], [6, 7, 8, 9]]) и возвращает массив состоящий из
// наибольшего числа каждого предоставленного подмассива.
function func3 (arr) {
    return arr.map(function callback(value,index,arr) {
        let maxvalue = arr[index][0];
        value.forEach(function callback(val) {
            if (val > maxvalue) {
                maxvalue = val;
            }
        })
        return(maxvalue);
    })
}

//Написать функцию, которая на вход принимает строку и целое число и обрезает строку
// (первый аргумент), если она длиннее заданной максимальной длины строки (второй
// аргумент) и возвращает обрезанную строку с «…» в конце.
function func4 (text, length) {
    if (text.length > length) {
        text = text.slice(0, length);
        text+="...";
    }
    return(text);
}


//Написать функцию, которая на вход принимает строку и возвращает эту строку в
// формате: каждое слово начинается с заглавной буквы, остальные в нижнем регистре
function func5 (text) {
    let str1 = text.split(" ");
    text = "";
    str1.map(function callback(value, index) {
        text += value.slice(0, 1).toUpperCase();
        text += value.slice(1, value.length).toLowerCase();
        if (index !== str1.length-1) {
            text += " ";
        }
    })
    return(text);
}

// Написать функцию, которая на вход принимает два массива и целое число n. Функция
// должна скопировать каждый элемент первого массива во второй по порядку начиная с
// индекса n второго массива и вернуть полученный массив. Входные массивы не должны
// изменяться. (например: при входных данных ([1, 2, 3], [4, 5], 1) должно вернуться
// [4, 1, 2, 3, 5].
function func6 (arr1,arr2,num) {
    let arr11 = arr1.slice();
    let arr22 = arr2.slice();
    arr11.map(function callback(value) {
        arr22.splice(num,0,value);
        num++;
    })
    return(arr22);
}

//Написать функцию, которая на вход принимает массив и удаляет в нем все "ложные
// значения"

function func7 (arr) {
    let falseNum = [null, undefined, 0];
    console.log(arr);
    console.log(falseNum);
     arr.map(function (value,index) {
        falseNum.some(function (val) {
            if (value == val) {
                console.log(value, val);
                arr.splice(index,1);
                return true;
            }
        })
    })
    if (undefined == undefined) console.log(true);
    return(arr);
}

//Написать функцию, которая на вход принимает массив, состоящий из двух строк.
// Функция должна вернуть true, если строка в первом элементе массива содержит все
// буквы строки во втором элементе массива (регистр игнорируется).
function func8(arr) {
    let str1;
    let str2;
    if (arr[0].toLowerCase()) {
        str1 = arr[0].toLowerCase();
        str2 = arr[1].toLowerCase();
    }
    else {
        str1 = arr[0];
        str2 = arr[1];
    }
    let pos = -1;
    if (str1.indexOf(str2) > -1) return true;
    else return false;
}

//Написать функцию, которая на вход принимает масссив и целое число. Функция
// должна разбить массив (первый аргумент) на группы длиной size (второй агрумент) и
// вернуть их в виде двумерного массива.
function func9(arr, size) {
    let arr1 = arr.slice();
    let arr2 = [];
    while (arr1.length > 0) {
        if (size > arr1.length) size = arr1.length;
        let a = arr1.slice(0,size);
        arr2.splice(arr2.length, 0,a);
        arr1.splice(0, size);
    }
    return arr2;
}

//Используя рекурсию (без использования циклов). Написать функцию, которая
// принимает массив и целое число (n) и заполняет массив числами от n до 1.
function func10(arr,n) {
    if (n == 0) {
        return arr;
    }
    else {
        arr[arr.length] = n;
        return func10(arr,n-1);
    }
}

//console.log(func1(4));
//console.log(func2("hi world"));
//console.log(func3([[1, 2, 3], [4, 5], [6, 7, 8, 9]]));
//console.log(func4("wasdwasdwasd", 4));
//console.log(func5("GOOD MORNING XFX"));
//console.log(func6([1, 2, 3], [4, 5], 1));
//console.log(func7([ "",0,null,undefined,60,-0,"20",0n]));
//console.log(func8(["123456", "123456"]));
//console.log(func9([1,2,3,4,5,6,7,8,9,10,11], 3));
console.log(func10([], 10));