import React from "react";
import ImageList from "./components/ImageList";
import "./styles.css";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [],
      imageUrl: "",
      urlCheck:false
    };
  }

  // Function to add image to local storage
  addImageToLS = () => {
    localStorage.setItem(
      "images",
      JSON.stringify([...this.state.images, this.state.imageUrl])
    );
  };

  // Function to get images from the local storage
  getImagesFromLS = () => {
    const images = localStorage.getItem("images");
    if (!images) {
      localStorage.setItem("images", []);
      return [];
    }
    return JSON.parse(images);
  };

  // onAddImage = (e) => {
  //   e.preventDefault();
  //   //Complete the handler function.
  //   const spaceRegex = /\s/;
  // // Test if the URL contains spaces
  //   if(spaceRegex.test(this.state.imageUrl) || this.state.imageUrl.length < 5){
  //     this.setState({
  //       urlCheck:true
  //     })
  //   }else{
  //     console.log("Hi");
  //     this.addImageToLS();
  //   }
  // };
  onAddImage = (e) => {
    e.preventDefault();
    this.addImageToLS();
    this.setState((prevState) => {
      return {
        images: [...prevState.images, this.state.imageUrl],
        imageUrl: ""
      };
    });
  };
  handleChange(e){
    if(e.target.value!= ''){
      this.setState({
        imageUrl: e.target.value,
        urlCheck:false
      })
    }
  }
  
  // Use appropriate lifecycle method to get images at the time of mounting
  componentDidMount(){
    this.setState({
      array:this.getImagesFromLS()
    })
  }

  render() {
    return (
      <>
        <form onSubmit={this.onAddImage}>
          <input
            type="text"
            placeholder="Image URL"
            value={this.state.imageUrl}
            // add onchange event handler
            onChange={(e)=>this.handleChange(e)}
          />
          <button>Add Image</button>
        </form>
        <ImageList images={this.state.images} urlCheck={this.state.urlCheck}/>
      </>
    );
  }
}
