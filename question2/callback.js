const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'promise is resolved!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {  
        setTimeout(() => {
            reject('{error: promise is rejected!}');
        }, 500);
    });
};

// Here we're calling both the promises separately
resolvedPromise()
    .then(success => {
        console.log(success); 
    })
    .catch(error => {
        console.error(error);
    });

rejectedPromise()
    .then(success => {
        console.log(success);
    })
    .catch(error => {
        console.error(error); 
    });
