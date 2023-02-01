import { useState } from 'react' 

function BigForm() {
    const [selectedOption, setOption] = useState("Вода")
    const [choice, setChoice] = useState();
    const [descr, setDescr] = useState("")
    const [isChecked, setIsChecked] = useState(false);
  
    const onValueChange = (e) => {
      setOption(e.target.value)
    }
  
    const handleOnChange = () => {
      setIsChecked(!isChecked);
    };
  
    
    return (
    <>
        <div className="radiogroup">
            <span>Выберите напиток</span>
            <div className="radio">
            <label>
                <input
                type="radio"
                value="Кофе"
                checked={selectedOption === "Кофе"}
                onChange={onValueChange}
                />
                Кофе
            </label>
            </div>
            <div className="radio">
            <label>
                <input
                type="radio"
                value="Чай"
                checked={selectedOption === "Чай"}
                onChange={onValueChange}
                />
                Чай
            </label>
            </div>
            <div className="radio">
            <label>
                <input
                type="radio"
                value="Вода"
                checked={selectedOption === "Вода"}
                onChange={onValueChange}
                />
                Вода
            </label>
            </div>
        </div>
        <div className='select'>
            <select
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                // multiple={true}
            >
                <option value={"default"} disabled>
                    Выберите из нижеперечисленных
                </option>
                <option value={"один"}>Один</option>
                <option value={"два"}>Два</option>
                <option value={"три"}>Три</option>
            </select>
        </div>
        <div className="textarea">
            <span>Дополнительные пожелания</span>
            <textarea 
            name="extra"
            cols="30"
            rows="10"
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            placeholder="Напишите что-то">
            </textarea>
        </div>
        <h4>Вы выбрали {selectedOption}, {choice} стакана</h4>
        <div className="checkboxes">
            Вы уверены что вы уверены?:
            <div className="topping">
            <input
                type="checkbox"
                id="topping"
                name="topping"
                value="Paneer"
                checked={isChecked}
                onChange={handleOnChange}
            />
            Да
            </div>
            <div className="result">
            Мы понимаем, что вы {isChecked ? "уверены" : "не уверены"}.
            </div>
        </div>
    </>
    )
}

export default BigForm