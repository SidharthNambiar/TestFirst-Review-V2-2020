/* eslint-disable no-unused-vars */

function pigify(words) {

    let vowels = ['a', 'e', 'i', 'o'];
    let pigifyChars = 'ay'
    let singlePhenomes = ['sch', 'qu'];

    let splitWords = words.split(' ');

    let result = splitWords.map((word) => {

        if (vowels.includes(word[0])) {
            return word + pigifyChars;
        }
        else if (word.startsWith('qu')) {
            return word.slice(2, word.length) + 'qu' + pigifyChars;
        }
        else if (word.startsWith('sch')) {
            return word.slice(3, word.length) + 'sch' + pigifyChars;
        }
        else {
            let chars = word.split('');
            let suffix = '';
            let index = null;

            for (let i = 0; i < chars.length; i++) {
                if(vowels.includes(chars[i])){
                    break;
                }

                suffix += chars[i];
                index = i;

            }

            return word.slice(index+1, word.length) + suffix + pigifyChars;


        }

    })
    result = result.join(' ');
    return result;
}

