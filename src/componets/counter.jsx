import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement1 = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleIncrement2 = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement1}
          className="btn btn-secondary btn-sm"
        >
          Add One
        </button>
        <button
          onClick={this.handleIncrement2}
          className="btn btn-secondary btn-sm"
        >
          Drop One
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
