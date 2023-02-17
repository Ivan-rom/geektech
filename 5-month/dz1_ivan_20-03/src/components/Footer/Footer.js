import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer
        {...this.props}
        // здесь используется второй способ,
        // где пропс передается в сам компонент,
        // и уже здесь меняется фон при курсоре внутри
        // style={{ background: this.props.isInside ? "blue" : "" }}
      >
        Footer
      </footer>
    );
  }
}

export default Footer;
