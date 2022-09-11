import '../css/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function NavigationBar() {
  return (
    <Navbar variant='dark' expand='lg'>
      <Container className='nav-container'>
        <Navbar.Brand href='/'>Shoe Cleaning</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='/'>HOME</Nav.Link>
            <Nav.Link href='/services'>SERVICES</Nav.Link>
            <Nav.Link href='#about'>ABOUT</Nav.Link>
            <Nav.Link href='#testimonial'>TESTIMONIAL</Nav.Link>
            <Nav.Link href='#article'>ARTICLE</Nav.Link>
          </Nav>
          <Button className='nav-btn' href='/login'>
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
