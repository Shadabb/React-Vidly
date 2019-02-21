import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onIncrement,
      onDecrement,
      onDelete
    } = this.props;
    console.log(this.props);
    return (
      <div style={{ paddingTop: 10 }}>
        <button className="btn btn-primary btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            // value={counter.value}
            // id={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          >
            {/* <h2>Counter #{counter.id}</h2> Children passing*/}
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
