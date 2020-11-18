import React, { Component } from "react";
import FruitContainer from './FruitContainer' 

export default class App extends Component {
  state = {
    fruits: ['strawberry', 'banana', 'apple', 'blueberry', 'orange', 'grape'],
    fruitsEaten: []
  }

  handleClick = fruit => {
    this.setState((prevState) => ({
      fruits: prevState.fruits.filter((eatenFruit) => eatenFruit !== fruit),
      fruitsEaten: [...prevState.fruitsEaten, fruit]
    }))
  }

  render() {
    return (
      <div className="App">
        <h3>Fruits</h3>
          <FruitContainer fruits={this.state.fruits} handleClick={this.handleClick} />
        <br></br>
        <h3>Fruits Eaten</h3>
        {this.state.fruitsEaten.join(' ')} 
      </div>
    );
  }
}


