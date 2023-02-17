import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import MouseClick from "./components/MouseClick/MouseClick";
import MouseClickComponent from "./components/MouseClickComponent/MouseClickComponent";
import MouseInside from "./components/MouseInside/MouseInside";

function App() {
  const HeaderWithInfo = MouseInside(Header);
  const MainWithInfo = MouseInside(Main);
  const FooterWithInfo = MouseInside(Footer);

  const MouseWithInfo = MouseClick(MouseClickComponent);

  return (
    <div className="App">
      <HeaderWithInfo />
      <MainWithInfo />
      <FooterWithInfo />

      <MouseWithInfo />
    </div>
  );
}

export default App;
