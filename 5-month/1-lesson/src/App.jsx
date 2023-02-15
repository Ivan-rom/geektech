import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import HelloWorld from "./component/HelloWorld/HelloWorld";
import HelloWorldRu from "./component/HelloWorldRu/HelloWorldRu";
import Translator from "./component/Translator/Translator";

function App() {
  const TranslatableContent = Translator(HelloWorld, HelloWorldRu, "ru");

  return (
    <div className="App">
      <TranslatableContent />
    </div>
  );
}

export default App;
