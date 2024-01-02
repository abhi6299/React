export let a=10;
export var arr = [1,2,4,5,3];
const obj =  {
    name:'abhi'
}
//There can be only one defualt export in 1 module
// //Method 1- Inline defualt export 
    // export default function greet(){
    //     console.log("Hello!");
    // }
//Method 2- export at the end 
    function greet(){
        console.log("Hello!");
    }
    
    export default greet;
export {obj as OBJ};
