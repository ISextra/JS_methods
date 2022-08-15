//Написать свою реализацию функции filter
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
//console.log([10,11,12,13,14,15,16,17,18,19,20].filter2((value) => value%2 === 0));