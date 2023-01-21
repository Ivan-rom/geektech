import { useState } from "react";

function Form() {
  const [name, setName] = useState("Ivan");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <form action="#" onSubmit={handleSubmit}>
      <span>{name}, заполните форму</span>
      <div>
        <input onChange={handleName} type="text" name="name" value={name} />
        {/* <button>Отправить</button>
        <input type="submit" value="Отправить" />
        <input type="number" onChange={handleName} />
        <textarea cols="30" rows="10" onChange={handleName}></textarea>
        <select onChange={handleName}>
          <option value="1">1</option>
          <option value="2">2</option>
        </select> */}
      </div>
    </form>
  );
}

export default Form;
