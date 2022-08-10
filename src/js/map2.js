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
//console.log([10,11,12,13,14,15,16,17,18,19,20].map2((value) => value+1));