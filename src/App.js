import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Routes from "./Routes";
import { Container } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <main>
        <Container>
          <Routes />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
