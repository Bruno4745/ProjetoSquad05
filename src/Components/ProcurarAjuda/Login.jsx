import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

export default function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>Login Adm</Button>

      <Modal show={show} onHide={handleClose} animation={false}><Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Acesso Restrito</Modal.Title>
        </Modal.Header>
        <Form action="https://unfadable-air.000webhostapp.com/api/login.php" method="GET">
          <Modal.Body>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" id="email" name="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" id="senha" name="senha"></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleClose} variant="outline-primary">Fechar</Button>
            <Button type="submit" variant="outline-primary">Login</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

