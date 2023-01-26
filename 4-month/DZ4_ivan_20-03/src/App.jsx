import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProductsList from "./components/ProductsList/ProductsList";
import LoginForm from "./components/LoginForm/LoginForm";

function App() {
  const [formState, setFormState] = useState("none");

  const searchHandler = (text) => {
    alert(`Произведен поиск по данному запросу: ${text}`);
  };

  return (
    <div className="App">
      <Navigation handler={searchHandler} openForm={setFormState} />
      <ProductsList />
      <LoginForm display={formState} closeForm={setFormState} />
    </div>
  );
}

export default App;
