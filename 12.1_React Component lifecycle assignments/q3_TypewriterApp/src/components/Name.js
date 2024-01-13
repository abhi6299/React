import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.name = null;
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevPros,prevState,snapShot){
    // console.log("Hi");
    console.log(prevPros);
    console.log(this.props);
    if(prevPros.showName != this.props.showName){
      if(this.props.showName){
        this.name = setInterval(()=>{
          console.log("Hi");
          this.typeWriterEffect()
        },500)
      }else{
        clearInterval(this.name);
      }
    }
  }
  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
