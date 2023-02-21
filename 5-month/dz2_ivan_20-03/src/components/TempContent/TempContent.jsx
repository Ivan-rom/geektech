import { useContext } from "react";
import { Context } from "../../App";

export default function TempContent() {
  const { temp } = useContext(Context);

  return (
    <div className={temp < 15 ? "text-blue-500" : "text-red-500"}>
      {temp}
      <sup>o</sup>C
    </div>
  );
}
