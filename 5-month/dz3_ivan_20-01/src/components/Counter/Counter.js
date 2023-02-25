import { useDispatch, useSelector } from "react-redux";

function Counter() {
  const dispatch = useDispatch();
  const { counter } = useSelector((state) => state);

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </>
  );
}

export default Counter;
