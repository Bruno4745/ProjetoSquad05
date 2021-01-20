import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useEffect, useState } from "react";

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
        <Modal.Body>
          <Form action="https://unfadable-air.000webhostapp.com/api/login.php" method="GET">
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" id="email" name="email"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" id="senha" name="senha"></Form.Control>
            </Form.Group>
            <Form.Group>
              <Button type="submit" variant="primary">Login</Button>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

