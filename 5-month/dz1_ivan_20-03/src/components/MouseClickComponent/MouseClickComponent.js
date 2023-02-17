import React, { Component } from "react";

class MouseClickComponent extends Component {
  render() {
    console.log(this.props);
    return (
      <button
        className="MouseClickComponent"
        // здесь решена проблема с warning при разворачивании пропсов
        // через ... , но это как по мне не удобно
        onClick={this.props.onClick}
        onContextMenu={this.props.onContextMenu}
      >
        {this.props.buttonName} button has been pressed
      </button>
    );
  }
}

export default MouseClickComponent;
