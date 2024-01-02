//Export- Method 1: Individual named exports
    // export let a=10;
    // export var arr = [1,2,4,5,3];
    // export const obj =  {
    //     name:'abhi'
    // }
    // export function greet(){
    //     console.log("Hello!");
    // }

//Export- Method 2:Export at the bottom 
    // export let a=10; // Individual export for a
    // export var arr = [1,2,4,5,3]; // Individual export for arr
    // const obj =  {
    //     name:'abhi'
    // }
    // function greet(){
    //     console.log("Hello!");
    // }
    //Collective export- export at the bottom done for obj and greet
    // export {obj, greet};

//Export- Method 3: Aliasing the exports
    export let a=10;
    export var arr = [1,2,4,5,3];
    const obj =  {
        name:'abhi'
    }
    function greet(){
        console.log("Hello!");
    }
    //Aliasing the export at the bottom
    export {obj as OBJJJ, greet as GREETINGS};
