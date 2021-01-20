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
                <Form.Control type="text" name="categoria" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nome: </Form.Label>
                <Form.Control type="text" name="nome" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Logradouro: </Form.Label>
                <Form.Control type="text" name="logradouro" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numero: </Form.Label>
                <Form.Control type="text" name="numero" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Complemento: </Form.Label>
                <Form.Control type="text" name="complemento" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cidade: </Form.Label>
                <Form.Control type="text" name="cidade" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Estado: </Form.Label>
                <Form.Control type="text" name="estado" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>CEP: </Form.Label>
                <Form.Control type="text" name="cep" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contato: </Form.Label>
                <Form.Control type="text" name="contato" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefone: </Form.Label>
                <Form.Control type="text" name="telefone" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" name="email" required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Site: </Form.Label>
                <Form.Control type="text" name="site" required/>
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