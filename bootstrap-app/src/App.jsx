
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function App() {
  const style ={
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "2rem"
      
    }
  }
  

  return (
    <>

<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src="https://learn.gomycode.co/043ad9d529ecb70be5b94d29a6b93ca5.png" width={200}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sign Up
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Seting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Profile
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div className="container my-4">
    <h1>
      Welcome To BootStrap App
     </h1>
    </div>
    <div style={style.grid}>
      <Card bg= "secondary" style={{ width: '16rem' }}>
        <Card.Img variant="top" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsqRVSqvEozoT7YUZ_8uY9m_vWS3zezzQnI7dAw9Qk7w&s" />
        <Card.Body>
          <Card.Title>Ferrari</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the  content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card bg= "secondary" style={{ width: '16rem' }}>
        <Card.Img variant="top" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlY_IN-VVhwi4ATmsXq7CzsFrI7FP9jCoSsPSwL82eUQ&s" />
        <Card.Body>
          <Card.Title>Lamboghini</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card bg= "warning" style={{ width: '16rem' }}>
        <Card.Img variant="top" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsqXOKF9nyvqIBhpw18BXhb2cn3lzz5qw_vTMj-E94tQ&s" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <Card bg= "success" style={{ width: '16rem' }}>
        <Card.Img variant="top" img src="https://advantage.com/wp-content/uploads/2022/01/what-is-an-exotic-car.jpg" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
     
    </div>
    

     
      
    </>
  )
}

export default App
