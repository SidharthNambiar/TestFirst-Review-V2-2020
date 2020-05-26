/* eslint-disable no-unused-vars */

function multipleMaps(mapper, maps) {

    let valueOfKey = null;

    let result = mapper.map((keyToFind) => {


        for (let i = 0; i < maps.length; i++) {

            if (maps[i].hasOwnProperty(keyToFind)) {
                valueOfKey = maps[i][keyToFind];
            }

        }

        return valueOfKey;

    })

    return result;

}