/* eslint-disable no-unused-vars */


Array.prototype.maap = function (callback) {

    let newArr = [];
    let returnedVal = null;

    this.forEach((element) => {

        returnedVal = callback(element);
        newArr.push(returnedVal)
    })

    return newArr;
}

Array.prototype.fiilter = function (callback) {

    let newArr = [];
    let returnedBoolean = null;

    this.forEach((element) => {
        returnedBoolean = callback(element);
        if (returnedBoolean) {
            newArr.push(element);
        }
    })

    return newArr;
}


Array.prototype.reeduce = function (combiningFunc, startVal) {

    let result = startVal;

    this.forEach((element) => {
        result = combiningFunc(result, element)
    })

    return result;
}


function reduce(arr, startVal, combiningFunc) {

    let result = startVal;

    for (let i = 0; i < arr.length; i++) {
        result = combiningFunc(result, arr[i])

    }

    return result;
}