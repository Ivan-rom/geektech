import React from "react";

const BackgroundColor = (WrapperComponent, color) => {
  return class extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: color }}>
          <WrapperComponent>{this.props}</WrapperComponent>
        </div>
      );
    }
  };
};

export default BackgroundColor;
