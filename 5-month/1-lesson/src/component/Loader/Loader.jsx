import React from "react";

const Loader = (WrapperComponent, timer) => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({ loading: false });
      }, timer);
    }

    render() {
      return this.state.loading ? (
        <div>Loading...</div>
      ) : (
        <WrapperComponent>{this.props}</WrapperComponent>
      );
    }
  };
};

export default Loader;
