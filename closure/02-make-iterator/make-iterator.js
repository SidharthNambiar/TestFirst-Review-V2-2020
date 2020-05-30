/* eslint-disable no-unused-vars */


function makeIterator(arrOfValues) {

    let index = 0;

    return {



        getNext() {

            index += 1;

            

            if(index > arrOfValues.length){
                value = undefined;
                done = true; 
            }
            else{
                value = arrOfValues[index-1];
                done = false;
            }
            

            return {
                value,
                done
            }


        },

        getIndex() {
           

                return index;
            
        }
    }
}