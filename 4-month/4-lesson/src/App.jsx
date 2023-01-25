import { useState } from "react";
import "./App.css";
import Clicker from "./components/Clicker/Clicker";
import Toggles from "./components/Toggles/Toggles";
import BigForm from "./components/BigForm/BigForm";

function App() {
  const [count, setCount] = useState(0);

  // const handlerClick = () => {
  //   setCount((curr) => curr + 1);
  //   setCount((curr) => curr + 1);
  //   setCount((curr) => curr + 1);
  // };

  const handlerChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="App">
      {/* <h1>{count}</h1> */}
      {/* <button onClick={handlerClick}>+</button> */}
      {/* <Clicker handlerChange={handlerChange} /> */}
      {/* <Toggles /> */}
      <BigForm />
    </div>
  );
}

export default App;
