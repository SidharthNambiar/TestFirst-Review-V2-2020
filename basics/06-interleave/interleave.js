

function interleave() {

    let arrOfStrings = [...arguments];
    let mapper = {};
    let result = ''



    arrOfStrings.forEach((word) => {

        let splitWord = word.split('')

        splitWord.forEach((char, index) => {
            if (mapper.hasOwnProperty(index)) {
                mapper[index].push(char);
            }
            else {

                mapper[index] = [char];
            }

        })

        // for (let i = 0; i < splitWord.length; i++) {

        //     if (mapper.hasOwnProperty(i)) {
        //         mapper[i].push(splitWord[i]);
        //     }
        //     else {

        //         mapper[i] = [splitWord[i]];
        //     }

        // }

    })

    for (key in mapper) {

        for (let i = 0; i < mapper[key].length; i++) {
            result += mapper[key][i];
        }


    }

    return result;


}

