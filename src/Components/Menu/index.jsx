import React from 'react'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { withRouter, Link } from 'react-router-dom'
import './style.css'
import logo from './logo.png'

const Menu = () => {
    return (
        <Navbar className="navbar" variant="dark" fixed="top" expand="md" collapseOnSelect>

            <Container>

                <Navbar.Brand as={Link} href="/" to="/">
                    <img
                        style={{ boxShadow: "0 0 1em", borderRadius: "50px" }}
                        width="100px"
                        src={logo}
                        className="d-inline-block align-top"
                        alt="Logo Recomecar"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} href="/sobrenos" to="/sobrenos">Sobre Nós</Nav.Link>
                        <NavDropdown title="Informativo">
                            <NavDropdown.Item as={Link} href="/gestanteMae" to="/gestanteMae">Gestante/Mãe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/profissional" to="/profissional">Profissional</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} href="/procurarAjuda" to="/procurarAjuda">Onde Procurar Ajuda</Nav.Link>
                        <Nav.Link as={Link} href="/faleConosco" to="/faleConosco">Fale Conosco</Nav.Link>
                        <Nav.Link as={Link} href="/legislacao" to="/legislacao">Legislação</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default withRouter(Menu);