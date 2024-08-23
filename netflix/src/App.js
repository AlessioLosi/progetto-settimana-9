
import './App.css';
import CustomNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/Movielist';
import Movies1 from './components/MovieList2';
import { Container } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Movies2 from './components/MovieList3';


function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar/>
      </header>
      <main>
        <Container >
          <Movies/>
        </Container>
        <Container>
          <Movies1/>
        </Container>
        <Container>
          <Movies2/>
        </Container>
      </main>
    </div>
  );
}

export default App;
