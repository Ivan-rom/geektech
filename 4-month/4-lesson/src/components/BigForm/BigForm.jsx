import { useState } from "react";

function BigForm() {
  const [selectedOption, setSelectedOption] = useState("Вода");
  const [choice, setChoice] = useState();
  const [descr, setDescr] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onValueChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handlerChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="radiogroup">
        <span>Выберите продукт:</span>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Кофе"
              onChange={onValueChange}
              checked={selectedOption === "Кофе"}
            />
            Кофе
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Чай"
              onChange={onValueChange}
              checked={selectedOption === "Чай"}
            />
            Чай
          </label>
        </div>
        <div className="radio">
          <label>
            <input
              type="radio"
              value="Вода"
              onChange={onValueChange}
              checked={selectedOption === "Вода"}
            />
            Вода
          </label>
        </div>
      </div>
      <div className="select">
        <select
          value={choice}
          onChange={(e) => setChoice(e.currentTarget.value)}
        >
          <option value={"default"} disabled selected>
            Выберите из нежепредложенных
          </option>
          <option value={"один"}>Один</option>
          <option value={"два"}>Два</option>
          <option value={"три"}>Три</option>
        </select>
      </div>
      <div className="textarea">
        <span>Дополнительные пожелания</span>
        <textarea
          cols="30"
          rows="10"
          value={descr}
          onChange={(e) => setDescr(e.target.value)}
          placeholder="Напишите что-нибудь..."
        ></textarea>
      </div>
      <h4>
        Вы выбрали {setChoice}, {choice} стакана
      </h4>
      <div className="checkbox">
        Вы уверены что вы уверены?
        <input type="checkbox" checked={isChecked} onChange={handlerChange} />
        Да
        <div className="result">
          Мы понимаем что вы {isChecked ? "уверены" : "не уверены"}
        </div>
      </div>
    </>
  );
}

export default BigForm;
