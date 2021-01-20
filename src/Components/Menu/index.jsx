import React from 'react'
import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'
import {withRouter, Link} from 'react-router-dom'
import './style.css'

const Menu = () => {
    return(
        <Navbar className="navbar" variant="dark" fixed="top" expand="md" collapseOnSelect>

                <Container>
                    <Navbar.Brand as={Link} href="/" to="/">
                        Recomeçar
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className="mr-auto">
                        <Nav.Link as={Link} href="/sobrenos" to="/sobrenos">Sobre Nós</Nav.Link>
                        <NavDropdown title="Informativo">
                            <NavDropdown.Item as={Link} href="/gestanteMae" to="/gestanteMae">Gestante/Mãe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/profissional" to="/profissional">Profissional</NavDropdown.Item>
                        </NavDropdown>
                            {/* <Nav.Link as={Link} href="/informativo" to="/informativo">Informativo</Nav.Link> */}
                            <Nav.Link as={Link} href="/procurarAjuda" to="/procurarAjuda">Onde Procurar Ajuda</Nav.Link>
                        <NavDropdown title="Fale Conosco">
                            <NavDropdown.Item as={Link} href="/contatos" to="/contatos">Contato</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/denuncia" to="/denuncia">Denúncia</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/depoimentos" to="/depoimentos">Depoimentos</NavDropdown.Item>
                        </NavDropdown>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
        </Navbar>
    )
}

export default withRouter(Menu);