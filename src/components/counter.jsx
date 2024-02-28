import React, { Component } from "react";

class Counter extends Component {
  // state = {
  //   value: this.props.counter.value,
  // };

  // constructor(){
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this)
  // }

  // handleIncrement = () => {
  //   this.setState({ count: this.state.count + 1 })
  // }

  // handleIncrement = (product) => {
  //   this.setState({ value: this.state.value + 1 });
  // };

  render() {
    console.log("Render - Counter")
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 bg-";
    classes += this.props.counter.value === 0 ? "primary" : "warning";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
