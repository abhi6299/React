//Import - Method 1
    // import {a, arr, obj, greet} from './09_Named-export.mjs';
    // console.log(a);
    // console.log(arr);
    // console.log(obj);
    // greet();

//Import - Method 2 when want to rename the imports i.e. aliasing
    // import {a as b, arr as ARR, obj, greet as greetings} from './09_Named-export.mjs';
    // //Use the renamed variables
    // console.log(b);
    // console.log(ARR);
    // console.log(obj);
    // greetings();

//Import - Method 3 when export is trying to do aliasing
    import {a, arr as ARR, OBJJJ, GREETINGS} from './09_Named-export.mjs';
    //Use the renamed variables
    console.log(a);
    console.log(ARR);
    console.log(OBJJJ);
    GREETINGS();