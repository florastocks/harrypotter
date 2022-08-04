import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"


const PageNavbar = () => {
  return (
    <Navbar bg='light' expand='md'>
      <Container>
        <Navbar.Brand as={Link} to='/home' className='brand'>Harry Potter</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav.Link as={Link} to='/allcharacters'>All Characters</Nav.Link>
          <Nav.Link as={Link} to='/allstudents'>All Students</Nav.Link>
          <Nav.Link as={Link} to='/allteachers'>All Teachers</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default PageNavbar