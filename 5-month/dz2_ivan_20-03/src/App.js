import { createContext, useState } from "react";
import LangButton from "./components/LangButton/LangButton";
import TempButton from "./components/TempButton/TempButton";
import TempContent from "./components/TempContent/TempContent";

export const Context = createContext(null);

function App() {
  const [lang, setLang] = useState("en");
  const [temp, setTemp] = useState(0);

  return (
    <div className="w-[1280px] mx-auto flex justify-center items-center gap-[5px]">
      <Context.Provider value={{ lang, setLang, temp, setTemp }}>
        <LangButton />
        <TempButton>
          {lang === "en" ? "Change temperature" : "Modifier la température"}
        </TempButton>
        <TempContent />
      </Context.Provider>
    </div>
  );
}

export default App;
