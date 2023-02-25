import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AboutPage() {
  const dispatch = useDispatch();
  const {
    // inputValue,
    titleAbout,
  } = useSelector((state) => state);
  const [input, setInput] = useState("");

  function changeInput(e) {
    // dispatch({ type: "INPUT_VALUE", payload: e.target.value });
    setInput(e.target.value);
  }

  function changeAboutTitle() {
    dispatch({ type: "TITLE_ABOUT", payload: input });
    setInput("");
  }

  function deleteTitle() {
    dispatch({ type: "CLEAR_ABOUT" });
    setInput("");
  }

  return (
    <>
      <h1>{titleAbout}</h1>
      <input
        type="text"
        placeholder="title"
        onChange={changeInput}
        value={input}
      />
      <button onClick={changeAboutTitle}>change</button>
      <button onClick={deleteTitle}>delete</button>
    </>
  );
}
