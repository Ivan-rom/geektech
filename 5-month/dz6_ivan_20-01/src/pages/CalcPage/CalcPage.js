import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { devide, minus, plus, times } from "../../redux/calcSlice";

function CalcPage() {
  const { result } = useSelector((state) => state.calcReducer);

  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");

  const dispatch = useDispatch();

  const checkInputs = () => {
    if (firstInput === "" || secondInput === "") {
      alert("Поле ввода пустое!");
      return false;
    }
    return true;
  };

  const plusFn = () => {
    if (checkInputs()) {
      dispatch(plus([firstInput, secondInput]));
    }
  };

  const minusFn = () => {
    if (checkInputs()) {
      dispatch(minus([firstInput, secondInput]));
    }
  };

  const timesFn = () => {
    if (checkInputs()) {
      dispatch(times([firstInput, secondInput]));
    }
  };

  const devideFn = () => {
    if (checkInputs()) {
      dispatch(devide([firstInput, secondInput]));
    }
  };

  return (
    <>
      <h1>{result}</h1>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />
      <button onClick={plusFn}>+</button>
      <button onClick={minusFn}>-</button>
      <button onClick={timesFn}>*</button>
      <button onClick={devideFn}>/</button>
    </>
  );
}

export default CalcPage;
