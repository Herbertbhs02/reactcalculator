import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import Input from './Input';
import Clear from './Clear';
import * as math from 'mathjs';
class App extends Component {
  constructor(){
    super();
    this.state = {input:" "};
  }
  userInput =(val) => {
     this.setState({input:this.state.input+val}) 
      }
      clearInput = () =>{this.setState({input:""})}
      equal = () =>{this.setState({input:math.eval(this.state.input)})}
  render() {
    return (
      <div className="App-wrap">
       <label>Calculator</label>
       <div className="App">
       <Input test={this.state.input}/>
       </div>
       <div className="App">
        <Button handleClick={this.userInput}>1</Button>
        <Button handleClick={this.userInput}>2</Button>
        <Button handleClick={this.userInput}>3</Button>
        <Button handleClick={this.userInput}>*</Button> 
        </div>
        <div className="App">
        <Button handleClick={this.userInput}>4</Button>
        <Button handleClick={this.userInput}>5</Button>
        <Button handleClick={this.userInput}>6</Button>
        <Button handleClick={this.userInput}>+</Button>
        </div>
        <div className="App">
        <Button handleClick={this.userInput}>7</Button>
        <Button handleClick={this.userInput}>8</Button>
        <Button handleClick={this.userInput}>9</Button>
        <Button handleClick={this.userInput}>/</Button>
        </div>
        <div className="App">
        <Button handleClick={this.userInput}>0</Button>
        <Button handleClick={this.userInput}>.</Button>
        <Button handleClick={() =>this.equal()}>=</Button>
        <Button handleClick={this.userInput}>-</Button>
        </div>
        <div className="App">
        <Clear handleClick={this.clearInput}>Clear</Clear>
        </div>
      </div>
    );
  }
}

export default App;
