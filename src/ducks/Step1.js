import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Wizard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
    this.addHouse = this.addHouse.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleAddress = this.handleAddress.bind(this);
    this.handleCity = this.handleCity.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleZip = this.handleZip.bind(this);
  }

  handleName(e) {
    this.setState({ name: e.target.value });
  }
  handleAddress(e) {
    this.setState({ address: e.target.value });
  }
  handleCity(e) {
    this.setState({ city: e.target.value });
  }
  handleState(e) {
    this.setState({ state: e.target.value });
  }
  handleZip(e) {
    this.setState({ zipcode: e.target.value });
  }

  addHouse() {
    axios
      .post("/api/houses", {
        name: this.state.name,
        address: this.state.address,
        city: this.state.city,
        state: this.state.state,
        zipcode: this.state.zipcode
      })
    //   .then(res =>
    //     this.setState({
    //       houses: res.data,
    //       name: "",
    //       address: "",
    //       city: "",
    //       state: "",
    //       zipcode: ""
    //     })
    //   );
  }

  render() {
    console.log(this.state);
    return (
      <div>
      Step 1
       
        <input
          type="text"
          placeholder="Property Name"
          value={this.state.name}
          onChange={this.handleName}
        />
        <input
          type="text"
          placeholder="Address"
          value={this.state.address}
          onChange={this.handleAddress}
        />
        <input
          type="text"
          placeholder="City"
          value={this.state.city}
          onChange={this.handleCity}
        />
        <input
          type="text"
          placeholder="State"
          value={this.state.state}
          onChange={this.handleState}
        />
        <input
          type="text"
          placeholder="Zip Code"
          value={this.state.zipcode}
          onChange={this.handleZip}
        />
        {/* <Link to="/"> */}
          <button onClick={this.addHouse}>Complete</button>
        {/* </Link> */}
      </div>
    );
  }
}
