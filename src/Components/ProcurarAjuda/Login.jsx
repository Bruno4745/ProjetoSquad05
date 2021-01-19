import React from "react";
import {  Modal, Button, Form} from "react-bootstrap";
import { useEffect, useState } from "react";

export default function ModalLogin() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const logar = () =>{
        const logar = async (evento) => {
            evento.preventDefault();
    
            const url = "http://localhost/ProjetoSquad05/php/api/login.php";
            const dados = new FormData(evento.target);
            await fetch(url, {
                method: "POST",
                body: dados
            });
        }
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Login Adm
        </Button>
       
        <Modal show={show} onHide={handleClose} animation={false}>
        <Form onSubmit={logar}>
            <Form.Label>
                E-mail
            </Form.Label>
            <Form.Control type="email" name="email"></Form.Control>
            <Form.Label>
                Senha
            </Form.Label>
            <Form.Control type="password" name="senha"></Form.Control>
        </Form>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Fechar
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Login
            </Button>
          </Modal.Footer>
       
    
        </Modal>
      </>
    );
  }
  
