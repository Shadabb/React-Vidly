import React, { Component } from "react";

// Input: liked: boolean
// output: onClick

class Like extends Component {
  render() {
    let classes = "fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <i
        onClick={this.props.onLiked}
        style={{ cursor: "pointer" }}
        className={classes}
        aria-hidden="true"
      />
    );
  }
}

export default Like;
