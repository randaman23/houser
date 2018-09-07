import React, { Component } from "react";
import axios from "axios";
import House from "../House/House";
import { Link } from "react-router-dom";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/houses").then(res => this.setState({ houses: res.data }));
  }

  deleteHouse(id){
      axios.delete(`/api/house/${id}`).then(res => this.setState({houses:res.data}))
  }

  render() {
      console.log(this.state)
    let houseList = this.state.houses.map((e, i) => {
      return (
        <House
          key={e.id}
          id={e.id}
          property_name={e.property_name}
          address={e.address}
          city={e.city}
          state={e.state}
          zipcode={e.zipcode}
          deleteHouse={this.deleteHouse}
        />
      );
    });
    return (
      <div>
        Dashboard
        <Link to="/wizard">
          <button>Add New House</button>
        </Link>
        {houseList}
      </div>
    );
  }
}
