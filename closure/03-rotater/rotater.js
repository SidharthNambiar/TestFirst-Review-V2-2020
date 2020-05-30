/* eslint-disable no-unused-vars */


function rotater(string) {

    let reversal = false;

    return function (num) {
        let count = 0;
        let result = string;
        let char = '';
        let arr = null;
      

        if (num === string.length) {
            reversal = !reversal;
        }


        while (count < num) {

            arr = result.split('');

            if (reversal === false) {
                char = arr.shift();
                arr.push(char);

            }
            else {

                char = arr.pop();
                arr.unshift(char);

            }

            result = arr.join('')
            count++;

        }

        return result;
    }
}