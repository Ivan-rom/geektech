import { Component } from "react";

const withWindowSize = (WrapperComponent) => {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.handleResize);
    }

    handleResize = () => {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    render() {
      return <WrapperComponent {...this.props} windowSize={this.state} />;
    }
  };
};

export default withWindowSize;
