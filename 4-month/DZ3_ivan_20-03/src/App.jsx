import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  const searchHandler = (text) => {
    alert(`Произведен поиск по данному запросу: ${text}`);
  };

  return (
    <div className="App">
      <Navigation handler={searchHandler} />
      <ProductsList />
    </div>
  );
}

export default App;
