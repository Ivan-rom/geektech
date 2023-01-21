import "./App.css";
import Clicker from "./components/Clicker/Clicker";
import Form from "./components/Form/Form";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const handleSearch = () => {
    console.log("Поиск сработал");
  };

  return (
    <div className="App">
      <Form />
      {/* <Clicker /> */}
      {/* <SearchForm onSearch={handleSearch} /> */}
    </div>
  );
}

export default App;
