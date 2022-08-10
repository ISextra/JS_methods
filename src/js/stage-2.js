//Написать свою реализацию функций: map, filter, find, some, every.
let arr = [10,11,12,13,14,15,16,17,18,19,20];
let arr1 = [5,10,15,20];
let arr2 = ["John", "Alex", "Ana", "Bob"];
let arr3 = [];

Array.prototype.map2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    let newArray = [];
    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            newArray[i] = callback(arr[i], i, arr);
        }
        i++;
    }

    return newArray;
};
//console.log(arr.map2((value) => value+1, arr1));

Array.prototype.filter2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    let newArray = [];
    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                newArray.push(arr[i]);
            }
        }

        i++;
    }

    return newArray;
};
//console.log(arr.filter2((value) => value%2 === 0));

Array.prototype.find2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                return arr[i];
            }
        }

        i++;
    }
};
//console.log(arr2.find2((value) => value === "Ana"));

Array.prototype.some2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    if (arr.length < 1) {
        return false;
    }

    let i = 0;

    while (i < arr.length) {
        if (i in arr) {
            if (callback(arr[i], i, arr)) {
                return true;
            }
        }

        i++;
    }

    return false;
};
//console.log(arr2.some2((value) => value === "Ana"));

Array.prototype.every2 = function (callback, thisArg) {
    let arr = this;

    if (arguments.length > 1) {
        arr = thisArg;
    }

    if (arr.length < 1) {
        return true;
    }

    let i = 0;
    let flag = false;

    while (i < arr.length) {
        if (i in arr) {
            if (!callback(arr[i], i, arr)) {
                return false;
            }
        }

        i++;
    }

    return true;
};
//console.log(arr3.every2((value) => value === !value));



