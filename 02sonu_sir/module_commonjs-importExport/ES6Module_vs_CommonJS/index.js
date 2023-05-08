// const t = require ("./script.js");             //  commonjs imports syntax

// import {sum,diff} from './script.js';          //   ES6  import syntax

// console.log(sum(25, 20), diff(25,20))


// it is for prints the functions imported in index.js from script.js
// -----------------------------------------------
// const st = require ('./script.js');

// console.log(st);
// ----------------------------------------------


// //  3rd way
    const li = require ("./script.js")
    console.log(li);             // this is for print exported function from script.js


    console.log(li.sum(12, 24));
    console.log(li.mul(2, 2, 5));
