import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return <div className="App"></div>;
}

export default App;
