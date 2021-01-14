import React, { Component } from "react";

export default class Counter extends Component {
  constructor() {
    super();
  }

  onAddCounter = () => {
    let { count } = this.props;
    count++;
    this.props.onUpdateCounter(count);
  };

  render() {
    return (
      <div>
        <button onClick={this.onAddCounter}>Add Counter</button>
      </div>
    );
  }
}
