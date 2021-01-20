import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container>
      <Button variant="primary" onClick={handleShow}>
        Login Adm
        </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Form action="http://localhost/ProjetoSquad05/php/api/login.php" method="GET">

          <Form.Group>
            <Form.Label>
              E-mail
            </Form.Label>
            <Form.Control type="email" id="email" name="email"></Form.Control>

          </Form.Group>
          <Form.Group>
            <Form.Label>
              Senha
            </Form.Label>
            <Form.Control type="password" id="senha" name="senha"></Form.Control>

          </Form.Group>
          <Form.Group>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary">
              Login
            </Button>
          </Form.Group>
        </Form>
      </Modal>
    </Container>
  );
}

