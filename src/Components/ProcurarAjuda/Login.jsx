import React from "react";
import { Modal, Form } from "react-bootstrap";
import { useState } from "react";

export default function ModalLogin() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dadosForm] = useState({
    email: '',
    senha: ''
  })

  function handleChange(evento){
      dadosForm[evento.target.name] = evento.target.value;
      //console.log(dadosForm);
  }

const fazerLogin = async (evento) => {
    evento.preventDefault();
    // console.log(dadosForm);

    const url = "https://protected-sierra-12413.herokuapp.com/fazerLogin";
    const resposta = await fetch(url, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
      });
      console.log(resposta);
      
    if(resposta.status == 200){
      window.location.href = "https://projeto-squad05.vercel.app/procurarAjudaAdm";
    } else{
      alert("Usuario ou Senha incorreto")
    }
}

  return (
    <div>
      <button className="btn-purple" onClick={handleShow}>Login Adm</button>

      <Modal show={show} onHide={handleClose} animation={false}><Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Acesso Restrito</Modal.Title>
        </Modal.Header>
        <Form onSubmit={fazerLogin}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" id="email" name="email" onChange={handleChange} required></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Senha</Form.Label>
              <Form.Control type="password" id="senha" name="senha" onChange={handleChange} required></Form.Control>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose} className="btn-purple">Fechar</button>
            <button type="submit" className="btn-purple">Login</button>
          </Modal.Footer>
        </Form>
      </Modal>
    </div>
  );
}

