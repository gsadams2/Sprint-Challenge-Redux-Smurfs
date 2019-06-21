import React, { Component } from "react";
import Smurf from "./Smurf";

export class Smurfs extends Component {
  render() {
    return (
      <div>
        {this.props.smurfs.map(smurf => {
          return (
            <Smurf
              key={smurf.id}
              smurf={smurf}
              deleteSmurf={this.props.deleteSmurf}
            />
          );
        })}
      </div>
    );
  }
}

export default Smurfs;
