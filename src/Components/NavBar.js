import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

const NavBar = () => (
  <Navbar className="navbar bg-light">
    <Container>
      <Navbar.Brand href="#home">Sua Empresa</Navbar.Brand>
      <Navbar.Toggle />
    </Container>
  </Navbar>

)

export default NavBar
