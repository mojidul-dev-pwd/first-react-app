import React, { Component } from "react";

class CounterOld extends Component {
  state = {
    count: 0,
  };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }

  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.doHandleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.state.count === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default CounterOld;
