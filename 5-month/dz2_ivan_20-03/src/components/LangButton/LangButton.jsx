import { useContext } from "react";
import { Context } from "../../App";

export default function LangButton() {
  const { lang, setLang } = useContext(Context);

  const changeLang = () => {
    lang === "en" ? setLang("fr") : setLang("en");
  };

  return (
    <button
      className="px-[3px] py-[2px] border-2 border-teal-500 bg-teal-400 text-white"
      onClick={changeLang}
    >
      {lang}
    </button>
  );
}
