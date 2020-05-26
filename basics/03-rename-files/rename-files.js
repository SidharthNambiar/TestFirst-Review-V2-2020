/* eslint-disable no-unused-vars */

function renameFiles(filenames) {

    let duplicateCount = {};
    let filenamesCopy = filenames;

    //Count all the duplicates in the file

    let total = filenames.reduce((totalDuplicates, currentFile, index) => {

        if (duplicateCount.hasOwnProperty(currentFile)) {
            totalDuplicates += 1;
            duplicateCount[currentFile].push(index)
        }
        else {
            duplicateCount[currentFile] = [];
        }

        return totalDuplicates;
    }, 0)

    if (total === 0) return filenames;

    // duplicateCount = {'hello': [2], 'world': []}

    let uniqueFilenames = Object.keys(duplicateCount);

    for (let filename in duplicateCount) {
        if (duplicateCount[filename].length !== 0) {
            let copyCount = 1;
            for (let i = 0; i < duplicateCount[filename].length; i++) {
                let newFilename = filename + `(${copyCount})`;
                while(uniqueFilenames.includes(newFilename)){
                    copyCount++;
                    newFilename = filename + `(${copyCount})`;

                }
          
                filenamesCopy[duplicateCount[filename][i]] = newFilename;
                copyCount++;
            }
        }

    }

    return filenamesCopy;

}