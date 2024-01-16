import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Titulos = () => {
  return (
    <Navbar fixed="top" expand="lg" className="py-3 footer"  data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home" className="barraPrincipal ms-2">The Tucu-News</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-gray' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-light">
            <Nav.Link className='text-light' href="#home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Titulos;