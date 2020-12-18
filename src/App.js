import Menu from './Components/Menu'
import Routes from './Routes'
import {Container} from 'react-bootstrap'
import {BrowserRouter} from 'react-router-dom'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu />
        <main>
          <Container>
            <Routes />
          </Container>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
