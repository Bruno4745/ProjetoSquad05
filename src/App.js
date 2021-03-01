import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import Chat from "./Components/Chat";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Routes />
        <Chat />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
