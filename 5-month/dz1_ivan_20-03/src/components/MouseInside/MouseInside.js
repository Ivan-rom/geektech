import React, { Component } from "react";

function MouseInside(InnerComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isInside: false,
      };
      this.mouseComeIn = this.mouseComeIn.bind(this);
      this.mouseComeOut = this.mouseComeOut.bind(this);
    }

    mouseComeIn() {
      this.setState({ isInside: true });
    }

    mouseComeOut() {
      this.setState({ isInside: false });
    }

    render() {
      return (
        <InnerComponent
          {...this.props}
          onMouseEnter={this.mouseComeIn}
          onMouseLeave={this.mouseComeOut}
          // попробовал разные варианты,
          // можно передать сами стили,
          // а сам стейт менять в HOC'е
          style={{ background: this.state.isInside ? "blue" : "" }}

          // а можно передавать стейт
          // и менять поведение компенента в самом компоненте
          // но в таком случае в консоли warning
          // поэтому этот способ закомментирован
          // isInside={this.state.isInside}
        />
      );
    }
  };
}

export default MouseInside;
