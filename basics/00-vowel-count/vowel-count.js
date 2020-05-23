/* eslint-disable no-unused-vars */


function vowelsCount(str) {

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let lowerCaseStr = str.toLowerCase();
    let chars = lowerCaseStr.split('');
    let result = { a: 0, e: 0, i: 0, o: 0, u: 0 };

    let totalVowels = chars.reduce((total, char) => {
        if (vowels.includes(char)) {
            total += 1;

            if (result.hasOwnProperty(char)) {
                result[char] += 1;
            }
            else {
                result[char] = 1;
            }

        }

        return total;

    }, 0)

    result["total"] = totalVowels;

    return result;



}