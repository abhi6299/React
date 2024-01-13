import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  // Use the required lifecycle methods here
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
      .then(response=>response.json())
      .then(json=>this.setState({
        loading:false,
        photos:json
      }));
  }
  render() {
    const {loading} = this.state;
    // Display loading status here
    return (
      <>
      {loading && <p>loading..</p>}
      <div className="App">
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
      </>
    );
  }
}
