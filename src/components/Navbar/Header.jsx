import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Navbar bg="warning" variant="dark">
        <Container>
          <Navbar.Brand href="/">JAWS</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">
              <Nav.Item>Home</Nav.Item>
            </NavLink>

            <NavLink to="/add">
              <Nav.Item>Add </Nav.Item>
            </NavLink>

            <NavLink to="/list">
              <Nav.Item>List</Nav.Item>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
