import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { withRouter, Link } from "react-router-dom";
import "./style.css";
import logo from "./logo.png";

const Menu = () => {
  return (
    <Navbar
      className="navbar"
      variant="dark"
      fixed="top"
      expand="md"
      collapseOnSelect
    >
      <Navbar.Brand style={navBarMenu} as={Link} href="/" to="/">
        <img
          style={logoMenu}
          width="120px"
          src={logo}
          className="d-inline-block align-top"
          alt="Logo Recomecar"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse>
        <Nav className="ml-auto text-center">
          <Nav.Link as={Link} href="/sobrenos" to="/sobrenos">
            Sobre Nós
          </Nav.Link>
          <NavDropdown title="Informativo">
            <NavDropdown.Item as={Link} href="/gestanteMae" to="/gestanteMae" className="dropdownMenu">
              Gestante/Mãe
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} href="/profissional" to="/profissional" className="dropdownMenu">
              Profissional
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} href="/procurarAjuda" to="/procurarAjuda">
            Onde Procurar Ajuda
          </Nav.Link>
          <Nav.Link as={Link} href="/faleConosco" to="/faleConosco">
            Fale Conosco
          </Nav.Link>
          <Nav.Link as={Link} href="/legislacao" to="/legislacao">
            Legislação
          </Nav.Link>
          <Nav.Link as={Link} href="/historia" to="/historia">
            História
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);

const logoMenu = {
  boxShadow: "0 0 1em",
  borderRadius: "50%",
  position: "absolute",
  left: "10%",
  top: "15px",
  opacity: 1,
};
const navBarMenu = {
  height: "100px",
};

