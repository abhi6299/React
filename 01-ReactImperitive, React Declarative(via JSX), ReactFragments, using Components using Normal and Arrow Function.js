// // JavaScript - Heading
// const heading = document.createElement("h2");
// heading.textContent = "Heading by JS";
// document.getElementById("root").append(heading);
// console.log("JS Heading: ", heading); // Return direct DOM element
// ------------------------------------------------------------React begins
//React - Heading --------
const reactHeading = React.createElement("h1",{className:"head"},"Hello React!");
// console.log("React Heading: ", reactHeading); // Returns a Object
// //Creating a root to provide to virtual DOM of react and then render whatever we want within it
// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

//React with JSX  ---------
//
const x = <h1>Hi</h1> // single element in JSX

// For adding multiple element in JSX
// Method 1- 
const jsxHeading1 = <div>
                    <h1>Hi</h1><p>My name is ABHI</p>
                   </div>;
// Method 2 - using React.Fragments
const jsxHeading2 = <React.Fragment>
                    <h1>Hi</h1><p>My name is ABHIN</p>
                   </React.Fragment>;
// Method 2 - using Empty Fragments
const jsxHeading3 = <>
                    <h1>About React</h1>
                    <h3>Features</h3>
                    <ol>
                        <li>React is a library thus lessens the work of developers</li>
                        <li>React is Composable</li>
                        <li>React is Declarative</li>
                        <li>Helps in creating Single Page Applications(SPAs) efficietly</li>
                    </ol>
                    </>;
// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading3);

//Using components
function App(){
    return (
            <>
                    <h1>About React</h1>
                    <h3>Features</h3>
                    <ol>
                        <li>React is a library thus lessens the work of developers</li>
                        <li>React is Composable</li>
                        <li>React is Declarative</li>
                        <li>Helps in creating Single Page Applications(SPAs) efficietly</li>
                    </ol>
            </>
    )
}
//Creating component via arrow f.
var Name = ()=>{
    return (
            <>
                <hr/>
                <h3>Called mutiple components together</h3>
                <h4>using return with one expression so have to use braces also(see code) </h4>
            </>
    )
};
//Or 
var Name2 = ()=>
        (
            <>
                <hr/>
                <h3>Called mutiple components together</h3>
                <h4>without using return as there is only one exp to be returned i.e. JSX expression </h4>
            </>
    );
// ReactDOM.createRoot(document.getElementById("root")).render(App()); // This will be a function call
ReactDOM.createRoot(document.getElementById("root")).render(<><App/><Name/><Name2/></>); // its a component call