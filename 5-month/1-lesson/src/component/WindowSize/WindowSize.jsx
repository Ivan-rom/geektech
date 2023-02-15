import { Component } from "react";

class WindowSize extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        Window size: {this.props.windowSize.width} x{" "}
        {this.props.windowSize.height}
      </div>
    );
  }
}

export default WindowSize;
