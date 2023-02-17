import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header
        {...this.props}
        // здесь используется второй способ,
        // где пропс передается в сам компонент,
        // и уже здесь меняется фон при курсоре внутри
        // style={{ background: this.props.isInside ? "blue" : "" }}
      >
        Header
      </header>
    );
  }
}

export default Header;
