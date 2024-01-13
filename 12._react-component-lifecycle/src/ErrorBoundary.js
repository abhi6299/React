import React from "react";

export default class ErrorBoundary extends React.Component{

    constructor(){
        super();
        this.state ={
            hasError:false // a boolean state for errors
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError:true
        };
    }

    componentDidCatch(error,info){
        console.log("Erros: ",error);
        console.log("Error Info: ",info);
    }

    render(){
        if(this.state.hasError){
            // Fetching a Fallback UI if there is any error
            return (<h1>Something went wrong, Pls contact Admin. Error Handled ;</h1>)
        }
        return this.props.children
    }
}