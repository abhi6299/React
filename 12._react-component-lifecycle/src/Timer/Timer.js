import React from "react";

export default class Timer extends React.Component{

    constructor(){ //Envoked only in mounting phase
        super();
        console.log("Timer Constructor");
        this.state = {
            // count:0
            time:0
        }
        this.timer = null; // for storing instance of setInterval to clear setInterval when needed
    }
    
    static getDerivedStateFromProps(){  //Mounting + updating phase method envoked
        console.log("Timer getDerivedStateFromProps");
        return null;
    }

    shouldComponentUpdate(nextProps, nextState){ //Updating phase method envoked
        console.log("Timer shouldComponentUpdate");
        console.log("Next Props : ",nextProps);
        console.log("this.Props : ",this.props);
        console.log("Next State : ",nextState);
        console.log("this.state : ",this.state);
        console.log("------");
        return nextProps.timerOn!==this.props.timerOn || nextState.time % 5 == 0; 
    }

    // handleIncrease(){
    //     this.setState((prevState)=>{
    //         return {count:prevState.count+1}
    //     })
    // }
    render(){ //Mounting + updating phase method envoked
        console.log("Timer Render");
            //For testing the order of updating phase methods
        // return (
        //     <>
        //         <h1>Timer</h1>
        //         <h2>{this.state.count}</h2>
        //         <button onClick={this.handleIncrease.bind(this)}>Increase</button>
        //     </>
        //     )
        return (
            <>
                <h1>Time spent: {new Date(this.state.time*1000).toISOString().slice(11,19)} </h1>
            </>
        )
    }

    componentDidMount(){ //Envoked only in mounting phase envoked
        console.log("Timer componentDidMount");
        console.log("--------------------------------------");
    }

    getSnapshotBeforeUpdate(prevProps,prevState){ //Updating phase method envoked
        console.log("Timer getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate(prevProps,prevState,snapShot){ //Updating phase method envoked
        console.log("Timer componentDidUpdate");
        // console.log("--------------------------------------");
        // if(this.state.time == 10){
        //     clearInterval(this.timer);
        // }
        console.log("Previous Props : ",prevProps);
        console.log("this.Props : ",this.props);
        console.log("Previous State : ",prevState);
        console.log("this.state : ",this.state);
        console.log("SnapShot from getSnapshotBeforeUpdate : ", snapShot);
        console.log("-----------------------------------------");
        if(prevProps.timerOn != this.props.timerOn){
            if(this.props.timerOn){
                this.timer = setInterval(()=>{
                    this.setState({
                        time:this.state.time+1
                    })
                },1000)
            }else{
                clearInterval(this.timer);
            }
        }
    }

    componentWillUnmount(){
        console.log("Timer componentWillUnmount");
        clearInterval(this.timer);
    }


}