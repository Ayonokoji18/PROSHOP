import React from "react";
import {
  Navbar,
  Nav,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

function CustomNavbar() {
  return (
    <Navbar bg="danger" variant="light" expand="lg">
      <Navbar.Brand>LIZZE</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="mx-2">
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Videos</Nav.Link>
          <Nav.Link> Images</Nav.Link>
          <Nav.Link> About</Nav.Link>
          <Nav.Link> Contact</Nav.Link>
          <NavDropdown title="Category">
            <NavDropdown.Item href="#">Amateur</NavDropdown.Item>
            <NavDropdown.Item>Brunette</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex justify-content-center align-items-center ms-auto me-2">
          <FormControl className="" type="search" placeholder="search..." />
          <Button variant="success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
