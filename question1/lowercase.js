function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject(new Error("Input must be an array"));
        }

        const filteredArray = mixedArray
            .filter(item => typeof item === 'string')
            .map(item => item.toLowerCase());
        resolve(filteredArray);
    });
}

const mixedArray = ['CANADA', 10, true, 25, false, 'Students'];

lowerCaseWords(mixedArray)
    .then(result => console.log(result))  
    .catch(error => console.error(error));
