/* eslint-disable no-unused-vars */


function callAll(obj, arrOfFunctions) {

    let result = arrOfFunctions.map((callback) => {

        return callback.call(obj)
    })

    return result;

}