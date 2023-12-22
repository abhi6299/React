function Heading(){
    return (<h1> Learning JSX in depth </h1>);
}
// Embedding JS Expression inside JSX
function sum(){
    let a = 8+8;
}
let sum2 = () =>{
    let b=9+9;
    return b;
}
// Embedding JSX Expression inside JSX
const test = <><h2>JSX Expression</h2> <p>Working ...</p> </>

function JsInsideJSX(){
    let name = "Abhi";
    let age =25;
    let demo1 = null;
    let demo2;
    let demo3 = true;

    // Using JS inside JSX
    return (
        <>
            <h3>My name is: {name} ! </h3> 
            <h3>My Age is : {age}.</h3>
            // Will not render anything for null/undefined/boolean
            <h3>Null value: {demo1}</h3>
            <h3>Undefined value: {demo2}</h3>
            <h3>Boolean value: {demo3}</h3>
            <h3>Calling function: {sum()} </h3>
            <h3>Calling function: {sum2()}</h3>
            {/* {JSX Expression} */}
            {test}
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<><Heading/><JsInsideJSX/></>);