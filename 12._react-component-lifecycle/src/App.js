import { Component } from "react"
import ComponentA from "./Components/ComponentA"
import Timer from "./Timer/Timer"
import ErrorBoundary from "./ErrorBoundary";
export default class App extends Component{
  constructor(){
    super();
    this.state = {
      mount:false,
      timerOn: false
    }
  }
  handleMount = () =>{
    this.setState((prev) => {
      return {
        mount:!prev.mount
      }
    })
  }
  handleTimerOn(){
    this.setState({
      timerOn: !this.state.timerOn
    })
  }
  render(){
    return(
      <>
        <h1>App</h1> <hr/>
          {/* For mounting phase functionality */}
        <ErrorBoundary>
          <ComponentA/>
        </ErrorBoundary>
        <hr/>

          {/* Timer functionality to test updating and unmounting phase */}
        <button onClick={this.handleMount}>{this.state.mount ? "UnMount" : "Mount"} </button><hr/>
        
        {this.state.mount && <Timer timerOn={this.state.timerOn}/>}
        
        <hr/><button onClick={()=>this.handleTimerOn()}>{this.state.timerOn ? "STOP" : "START"} </button>
      </>
    )
  }
}
