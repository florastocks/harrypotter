import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"


const PageNavbar = () => {
  return (
    <Navbar className='navbar-container'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='brand'>Harry Potter</Navbar.Brand>
        <Navbar.Collapse id='basic-navbar-nav' className='justify-content-end'>
          <Nav.Link as={Link} to='/allcharacters'>All Characters</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default PageNavbar