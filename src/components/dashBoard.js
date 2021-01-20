import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class dashBoard extends Component {
  render() {
    return (
      <div>
        <Link to="/addproduct">Add Product</Link>
        Dashboard
      </div>
    );
  }
}
