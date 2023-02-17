import React, { Component } from "react";

function MouseClick(InnerComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        whichButton: "none",
      };
      this.leftClick = this.leftClick.bind(this);
      this.rightClick = this.rightClick.bind(this);
    }

    leftClick(e) {
      this.setState({ whichButton: "left" });
    }

    rightClick(e) {
      e.preventDefault();
      this.setState({ whichButton: "right" });
    }

    render() {
      return (
        <InnerComponent
          onClick={this.leftClick}
          onContextMenu={this.rightClick}
          buttonName={this.state.whichButton}
        />
      );
    }
  };
}

export default MouseClick;
