import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhotoPage from "./pages/PhotoPage";
import PhotosPage from "./pages/PhotosPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotosPage />} />
          <Route path="/photo/:id" element={<PhotoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
