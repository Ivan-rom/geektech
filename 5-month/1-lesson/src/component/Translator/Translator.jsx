import { Component } from "react";

export default function Translator(
  OriginalContent,
  TranslatedContent,
  translateLanguage
) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        language: "en",
      };
      this.translate = this.translate.bind(this);
    }

    translate() {
      this.setState({
        language: this.state.language === "en" ? translateLanguage : "en",
      });
    }

    render() {
      return (
        <div>
          <button onClick={this.translate}>translate</button>
          {this.state.language === "en" ? (
            <OriginalContent />
          ) : (
            <TranslatedContent />
          )}
        </div>
      );
    }
  };
}
