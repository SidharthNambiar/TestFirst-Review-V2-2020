/* eslint-disable no-unused-vars, no-extend-native */


Array.prototype.doNotInclude = function (arr) {

    if(typeof arr === 'number'){
       arr = [arr]
    }

    let result = this.filter((element, index) => {
        
        return !arr.includes(index)
    

        
    })

    return result;
}