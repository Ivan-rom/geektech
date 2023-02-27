import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import {
  addCountAction,
  changeInputAction,
  clearAllAction,
} from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const { inputValue, countsList } = useSelector((state) => state);
  const [reversedCounts, setReversedCounts] = useState(countsList);

  useEffect(() => {
    setReversedCounts([...countsList].reverse());
  }, [countsList]);

  const inputChange = (e) => {
    dispatch(changeInputAction(e.target.value));
  };

  const addCount = () => {
    dispatch(addCountAction());
  };

  const clearList = () => {
    dispatch(clearAllAction());
  };

  return (
    <div className="App">
      <input type="number" value={inputValue} onChange={inputChange} />
      <button onClick={addCount}>Add count</button>
      <button onClick={clearList}>Clear list</button>
      <ul>
        {reversedCounts.map((count) => (
          <li key={count.id}>{count.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
