function ArrayandObjectinsideJSX (){
    let arr = [1,2,3,4,5]
    let even = arr.filter((ele) => ele%2==0);
    let obj = {name:"Alexa",age:10}
    let cars = ["BMW","AUDI","MARUTI","SKODA"]
    let students = [{name:"Abhi", age:10, marks:30},{name:"Dhruv", age:20, marks:40}];
    return (
        <>
            <h1>Embedding arrays and objects of JS in JSX</h1>
            {/* Array rendering methods */}
            <h3>{arr}</h3>

            <hr/>
            {arr.map(function (num, index) {
                return <h2 key={index}>{num}</h2>;
            })}
            
            <hr/>
            {/* Implicit return as only one thing to be returned */}
            {arr.map((ele,index)=> <h4 key={index}>{ele}</h4>)}
            
            <hr/>
            {/* Using filter fucnction */}
            {arr.filter((n) => n % 2 === 0).map((n,index) => (<h3 key={index}>{n}</h3>))}
            
            <hr/>
            {/* Printing list of cars */}
            <h3>Printing list of cars</h3>
            <ul>
                {cars.map((car,index)=> <li key={index}>{car}</li>)}
            </ul>

            <hr/>
            {/* {-------Object rendering} */}
            <h3>{obj.name}</h3>

            <hr/>
            <h2>Students Details</h2>
            <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Marks</th>
                    </tr>
                    </thead>
                    <tbody>
                {/* {students.map((student,index)=>{
                    return (<><tr key={index}>
                            <td> {student.name} </td>
                            <td> {student.age} </td>
                            <td> {student.marks} </td>
                    </tr></>)
                })} */}
                {/* OR */}
                {students.map((student,index)=>
                    (<tr key={index}>
                            <td> {student.name} </td>
                            <td> {student.age} </td>
                            <td> {student.marks} </td>
                    </tr>)
                )}
                    </tbody>
            </table>

        </>
    )
}
ReactDOM.createRoot(document.getElementById("root")).render(<ArrayandObjectinsideJSX/>);