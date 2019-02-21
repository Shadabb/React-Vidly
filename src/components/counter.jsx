import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value
  //   };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // Ajax call and get new data from server
      console.log("prevProps", prevProps);
      console.log("prevState", prevState);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  badgeClasses = () => {
    let classes = "badge badge-";
    classes += this.props.counter.value === 0 ? "warning" : "secondary";
    return classes;
  };

  formatCount = () => {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  };

  render() {
    console.log("counter", this.props);
    return (
      <div className="row" style={{ paddingTop: 10 }}>
        {/* {this.props.children} */}
        <div className="col-1">
          <span className={this.badgeClasses()}>{this.formatCount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm"
          >
            x
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
