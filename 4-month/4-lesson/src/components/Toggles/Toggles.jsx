import { useState } from "react";
import st from "./toggles.module.css";

function Toggles() {
  const [showText, setShowText] = useState(true);

  return (
    <div className={st.container}>
      <div>
        <button onClick={() => setShowText(!showText)}>Скрыть текст</button>
        {showText ? (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
            fugiat!
          </p>
        ) : null}
        <p className={showText ? st.red : st.hidden}>Lorem 2</p>
      </div>
    </div>
  );
}

export default Toggles;
