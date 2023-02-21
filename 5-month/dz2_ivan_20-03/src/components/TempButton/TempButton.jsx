import { useContext } from "react";
import { Context } from "../../App";

export default function TempButton({ children }) {
  const { setTemp } = useContext(Context);

  const changeTemp = () => {
    const temp = Math.floor(Math.random() * 30);

    setTemp(temp);
  };

  return (
    <button
      onClick={changeTemp}
      className="p-[2px] border-4 border-gray-700 bg-gray-400 outline-0"
    >
      {children}
    </button>
  );
}
