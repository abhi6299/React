import {a,arr,OBJ} from './09.1 Default-Exports.mjs';

//Import Default export
// //Method 1: No aliasing
// import greet from './09.1 Default-Exports.mjs';

//Method 2: Aliasing- can name anything without 'as' keyword
    // because program know default to ek hi export ho rha hoga so usi ka naam alias kar rahe hain
import GREET from './09.1 Default-Exports.mjs';

console.log(a);
console.log(arr);
console.log(OBJ);
//Calling the default function
// greet();// - For Method 1 import
GREET(); //- for mthod 2 import
