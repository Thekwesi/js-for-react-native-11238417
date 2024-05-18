
const  {modifiedArray,originalArray} = require('./arrayManipulation');


function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        console.error("The arrays must be of the same length");
        return [];
    }

    const userProfiles = [];

    for (let i = 0; i < names.length; i++) {
        userProfiles.push({
            id: i + 1,
            originalName: names[i],
            modifiedName: modifiedNames[i]
        });
    }

    return userProfiles;
}


const data = createUserProfiles(originalArray,modifiedArray)
console.log(data)
module.exports = createUserProfiles;
   