/* eslint-disable no-unused-vars */


function sometimes(action) {

    let count = 1;
    let flag

    return function (a, b) {

        if (count < 4) {
            count += 1;
            return action(a, b);
        }
        else if (count % 2 === 0) {
            count += 1;
            return 'I do not know!'
        }
        else {
            count += 1;
            return action(a, b);
        }


    }
}