import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { getSmurfs, addSmurf, deleteSmurf } from "../actions";
import Smurfs from "./Smurfs";

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // list: [],
      name: "",
      age: "",
      height: ""
    };
  }

  componentDidMount() {
    this.props.getSmurfs();
    // this.setState({ list: { ...this.props.smurfs } });
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  addSmurfForm = e => {
    e.preventDefault();
    const data = {
      name: this.state.name,
      height: this.state.height,
      age: this.state.age
    };

    this.props.addSmurf(data);
    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addSmurfForm}>
          <input
            placeholder="Name"
            value={this.state.name}
            name="name"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Age"
            value={this.state.age}
            name="age"
            onChange={this.handleInputChange}
          />
          <input
            placeholder="Height"
            value={this.state.height}
            name="height"
            onChange={this.handleInputChange}
          />
          <button>Add Smurf</button>
        </form>
        <Smurfs
          smurfs={this.props.smurfs}
          deleteSmurf={this.props.deleteSmurf}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  fetchingSmurfs: state.fetchingSmurfs,
  addingSmurf: state.addingSmurf,
  error: state.error,
  smurfAdded: state.smurfAdded,
  deletingSmurf: state.deletingSmurf,
  smurfDeleted: state.smurfDeleted
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf }
)(App);
