import React, { Component } from "react";

export class Smurf extends Component {
  render() {
    return (
      <div>
        <h1> {this.props.smurf.name} </h1>
        <h1> {this.props.smurf.age} </h1>
        <h1> {this.props.smurf.height} </h1>
      </div>
    );
  }
}

export default Smurf;
