
// // 1st way for module
//     const sum = (a, b) => { 
//         return a + b; 
//     }

//     const diff = (a, b) => {
//         return a - b;
//     }

//     export { sum, diff };

    
// // 2nd way    
//     const sum = (a, b) => {
//         return a + b;
//     }

//     exports.sum


// 3rd way running for that 3rd way in index.js for commonjs
    exports.sum = (a, b) => {
        return a+b;
    }

    exports.mul = (x, y, z) => {
        return x*y*z;
    }