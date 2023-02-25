import { useDispatch, useSelector } from "react-redux";

function MainPage() {
  const dispatch = useDispatch();
  const { title, titleTwo } = useSelector((state) => state);

  function changeTitle() {
    dispatch({ type: "CHANGE_TITLE" });
    dispatch({ type: "CHANGE_TITLE_TWO" });
  }

  function changeTitleWithParams() {
    dispatch({ type: "CHANGE_TYPE_WITH_PARAMS", payload: "Hello World" });
  }

  return (
    <>
      <h1>{title}</h1>
      <h2>{titleTwo}</h2>
      <button onClick={changeTitle}>change title</button>

      <button onClick={changeTitleWithParams}>Change title with params</button>
    </>
  );
}

export default MainPage;
