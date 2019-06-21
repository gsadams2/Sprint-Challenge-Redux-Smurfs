import React, { Component } from "react";

export class Smurf extends Component {
  deleteSmurfYo = e => {
    this.props.deleteSmurf(this.props.smurf.id);
  };

  render() {
    return (
      <div>
        <h1> {this.props.smurf.name} </h1>
        <h1> {this.props.smurf.age} </h1>
        <h1> {this.props.smurf.height} </h1>
        <button onClick={this.deleteSmurfYo}>Delete Smurf</button>
      </div>
    );
  }
}

export default Smurf;
