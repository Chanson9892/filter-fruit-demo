import React, { Component } from "react";
import Fruit from "./Fruit";


export default class FruitContainer extends Component {

  render() {
    return (
      <div>
          {this.props.fruits.map((fruit) => (
            <Fruit key={fruit.id} fruit={fruit} handleClick={this.props.handleClick}/>
          ))}
        </div>
    );
  }
}