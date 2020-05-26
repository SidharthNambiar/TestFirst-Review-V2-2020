/* eslint-disable no-unused-vars */


function mapQuest(directions) {

   

    let result = directions.reduce((finalDirections, currentDirection) => {

      

        if ((currentDirection === 'S' && finalDirections[finalDirections.length - 1] === 'N') || (currentDirection === 'N' && finalDirections[finalDirections.length - 1] === 'S') || (currentDirection === 'E' && finalDirections[finalDirections.length - 1] === 'W') || (currentDirection === 'W' && finalDirections[finalDirections.length - 1] === 'E')){
            
            finalDirections.pop();
        }
        else{
            finalDirections.push(currentDirection)
        }
        


            return finalDirections;

    }, [])

    return result;

}

console.log(mapQuest(['N', 'S', 'E']))
