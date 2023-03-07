import { useDispatch, useSelector } from "react-redux";
import {
  changeInputValue,
  changeTitle,
  changeTitleWithParams,
  changeTitleWithValue,
} from "../../store/titleSlice";

function MainPage() {
  const dispatch = useDispatch();
  const { title, inputValue } = useSelector((state) => state.titleReducer);

  const changeTitleFn = () => {
    dispatch(changeTitle());
  };

  const withParams = () => {
    dispatch(changeTitleWithParams("hello Geeks"));
  };

  return (
    <>
      <h1>{title}</h1>

      <input
        type="text"
        onChange={(e) => dispatch(changeInputValue(e.target.value))}
        value={inputValue}
      />
      <button onClick={() => dispatch(changeTitleWithParams(inputValue))}>
        submit
      </button>

      <br />

      <button onClick={changeTitleFn}>change title</button>
      <button onClick={withParams}>with params</button>
    </>
  );
}

export default MainPage;
