import React, { Component } from "react";

export default class Addproduct extends Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.state = {
      product: { id: 1, name: "xxx", model: "", expireDate: new Date() },
    };
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <form class="form-group">
        <div class="form-control">
          <div onClick={this.handleGoBack}> GO BACK </div>

          <label for="productId">Product ID</label>
          <input id="productId" type="number" name="productId" ref={this.input} />
        </div>
        <div class="form-control">
          <label for="productName">Product Name</label>
          <input id="productName" type="text" name="productName" ref={this.input} />
        </div>
        <div class="form-control">
          <label for="productmodel">Product Model</label>
          <input id="productmodel" type="text" name="productmodel" ref={this.input} />
        </div>
        <div class="form-control">
          <label for="productdate">Product expire date</label>
          <input id="productdate" type="date" name="productdate" ref={this.input} />
        </div>
      </form>
    );
  }
}
