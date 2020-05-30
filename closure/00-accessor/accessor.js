/* eslint-disable no-unused-vars */


function accessor(obj) {

    return function (key, newValue) {
        if(newValue === undefined){
            if(obj.hasOwnProperty(key)){
                return obj[key];
            }
            else{
                return undefined;
            }
        }
        else{
            obj[key] = newValue;
        }
    }
}