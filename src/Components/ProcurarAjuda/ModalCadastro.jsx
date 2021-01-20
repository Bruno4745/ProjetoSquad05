import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {

    const enviaParceiro = async (evento) => {
        const url = "http://localhost/ProjetoSquad05/php/api/parceiro.php";
        const dados = new FormData(evento.target);
        await fetch(url, {
            method: "POST",
            body: dados
        });
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Cadastrar Novo Parceiro
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={enviaParceiro} >
            <Form.Group>
                <Form.Label>Categoria: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="categoria"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nome: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="nome"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Logradouro: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="logradouro"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numero: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="numero"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Complemento: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="complemento"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cidade: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="cidade"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Estado: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="estado"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>CEP: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="cep"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contato: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="contato"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefone: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu telefone" name="telefone"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" placeholder="nome@email.com.br" name="email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Site: </Form.Label>
                <Form.Control type="text" placeholder="Digite seu nome" name="site"/>
            </Form.Group>
                <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Fechar</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function ModalCadastro() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Cadastrar Parceiro
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default ModalCadastro;