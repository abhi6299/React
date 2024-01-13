import React, { Component } from "react";
import ComponentB from "./ComponentB";
class ComponentA extends React.Component{
    constructor(){
        super();
        this.state = {
            name:'ComponentA',
            data: []
        }
        console.log("ComponentA contructor");
        // this.setState({
        //     name:"CA"
        // }) throws Error in browser console
    }
    
    static getDerivedStateFromProps(props,state){ // props: passed from parent, state: current state : Both are optional to include !
        console.log("ComponentA getDerivedStateFromProps");
        // this.setState({
        //         name:"CA"
        //     }) 
        return null;
    }

    //API used: https://jsonplaceholder.typicode.com/users
    componentDidMount(){
        console.log("ComponentA componentDidMount");
        //intentionally removeing 's' from users below
        fetch('https://jsonplaceholder.typicode.com/user') //Performing a side-effect: An API fecth call
            .then(response => response.json())
            .then(json => this.setState({
                    data:json
            }))
    }

    render(){
        // this.setState({
        //         name:"CA"
        //     }) Infinitely render or app thus avoid in this also
        console.log("ComponentA render");
        return(
            <>
            <h1>Parent Component:- {this.state.name}</h1>
            <ul>
                {this.state.data.map(user => {
                    return (
                        <li>{user.name}</li>
                    )
                })}
                {/* {this.state.data.map((user,index) => <li key={index}>{user.name}</li>)} */}
            </ul>
            <ComponentB/>
            </>
        )
    }
}
export default ComponentA;