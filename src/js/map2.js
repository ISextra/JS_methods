//Написать свою реализацию функции map

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