
import './App.css';
import CustomNavbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './components/Movielist';
import { Container } from 'react-bootstrap';
import { Row} from 'react-bootstrap';
import { Col } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <header>
        <CustomNavbar/>
      </header>
      <main>
        <Container>
          <Row>
            <Col>
          <Movies/>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
