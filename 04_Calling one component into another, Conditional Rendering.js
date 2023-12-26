let cars = [{img:"https://img.buzzfeed.com/buzzfeed-static/static/2022-10/21/14/asset/db20bc85cd8b/sub-buzz-6084-1666361516-16.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",name:"BMW",Average:10},{img:"https://img.buzzfeed.com/buzzfeed-static/static/2022-10/21/14/asset/db20bc85cd8b/sub-buzz-6084-1666361516-16.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",name:"BMW",Average:10},{img:"https://img.buzzfeed.com/buzzfeed-static/static/2022-10/21/14/asset/db20bc85cd8b/sub-buzz-6084-1666361516-16.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto",name:"BMW",Average:10}];
let students = [{name:"Abhi", age:10, marks:30},{name:"Dhruv", age:20, marks:40}];

function Cars(){
    return (
        <>
        <h1> Cars Details </h1>
        <table border="1px">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((car,index)=>(
                    <tr key={index}>
                        <td><img style={{ width: '30px' }} src={car.img} alt={car.name} /></td>
                        <td>{car.name}</td>
                        <td>{car.Average}</td>
                    </tr>
                ) )}
            </tbody>
        </table>
        </>
    )
}

const Inventory = () => {
    const itemsSold = [
      { id: 1, name: "iPhone 14", price: 1200, qty: 22 },
      { id: 2, name: "iPad Pro", price: 800, qty: 18 },
    ];

    return (
      <>
        <h1>Record of sold items</h1>
        <table border="1px">
        {/* iterate over data here */}
            <thead>
                <tr>
                    <th> Id </th>
                    <th> Name </th>
                    <th> Selling Price </th>
                    <th> Quantity </th>
                </tr>
            </thead>
            <tbody>
                {
                itemsSold.map((item, i)=>(
                <tr key={i}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                </tr>
                ))
                }
            </tbody>
            <tfoot>
              <tr>
                <td>Total Revenue</td>
                <td colSpan="3">${itemsSold.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)}</td>
              </tr>
            </tfoot>
        </table>
      </>
    );
  };

//   Conditional Rendering
  function App(){
    const check = false;
    if(check)
        return <Cars></Cars>
    return (<>
        <Cars></Cars>
        <Inventory></Inventory>
        <App1></App1>
            </>)
  }

//using Ternary Operator | AND operator | OR operator
  function App1(){
    let loggedIn=true;
    let firstName="Abhi";
    let lastName="Goyal";
    return (
        <>
            {/* TERNARY */}
                <h1>Hello {loggedIn?"Alexa":"Google"}</h1> <hr></hr>
            {/* AND */}
                <p>{loggedIn && "Welcome Dear"}</p>
                {/* OR */}
                {loggedIn && <p>Welcome Dear</p>} <hr/>
            {/* OR */}
                <p>{lastName || firstName }</p>
                <h1>Hello {loggedIn? lastName || firstName :"Google"}</h1>
        </>
    )
  }

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);