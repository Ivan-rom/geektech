import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <main
        {...this.props}
        // здесь используется второй способ,
        // где пропс передается в сам компонент,
        // и уже здесь меняется фон при курсоре внутри
        // style={{ background: this.props.isInside ? "blue" : "" }}
      >
        Main
      </main>
    );
  }
}

export default Main;
