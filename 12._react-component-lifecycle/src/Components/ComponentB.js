import React, { Component } from "react";
class ComponentB extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'ComponentB'
        }
        console.log("ComponentB contructor");
    }

    render(){
        console.log("ComponentB render");
        return(
            <h2>Child Component:- {this.state.name}</h2>
        )
    }
    componentDidMount(){
        console.log("ComponentB componentDidMount");
    }
    static getDerivedStateFromProps(props,state){ // props: passed from parent, state: current state : Both are optional to include !
        console.log("ComponentB getDerivedStateFromProps");
        return null;
    }
}
export default ComponentB;