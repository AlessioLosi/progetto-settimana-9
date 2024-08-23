import { Navbar, Container, Nav, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


const CustomNavbar = function () {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-dark mt-0 nav" >
      <Container >
        <Row>
            <div className='d-flex align-items-center'>
         <Navbar.Brand href="#home"><img src="https://loodibee.com/wp-content/uploads/Netflix-logo.png" alt="netflix logo" className='logo' /></Navbar.Brand>

          
            <Nav.Link href="#features" className=' text-white'>Home</Nav.Link>
            <Nav.Link href="#tvshows" className=' text-white'>Tv Shows</Nav.Link>
            <Nav.Link href="#movies" className=' text-white'>Movies</Nav.Link> 
            <Nav.Link href="#recentlyadd" className=' text-white'>Recently Added</Nav.Link>
            <Nav.Link href="#mylist" className=' text-white'>My List</Nav.Link>    </div> 
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"> 
          </Nav>
        </Navbar.Collapse>
</Row>
<Row></Row>
      </Container>
    </Navbar>
  );
}


export default CustomNavbar