import React, { useState } from "react";
import { Modal, Form } from "react-bootstrap";

function MyVerticallyCenteredModal(props) {

    //INICIO - capturar dados do formulario
    const [dadosForm] = useState({
        categoria: '',
        nome: '',
        logradouro: '',
        numero: null,
        complemento: '',
        cidade: '',
        estado: '',
        cep: '',
        contato: '',
        telefone: '',
        email: '',
        site_parceiro: ''
    })

    function handleChange(evento){
        dadosForm[evento.target.name] = evento.target.value;
        console.log(dadosForm);
    }
    //FIM - capturar dados do formulario

    const enviaParceiro = async (evento) => {
        evento.preventDefault();
        // console.log(dadosForm);

        const url = "https://protected-sierra-12413.herokuapp.com/procurarAjuda";
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        });
        window.location.reload();
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
        <Form>
          <Modal.Body>
            <Form.Group>
                <Form.Label>Categoria: </Form.Label>
                <Form.Control type="text" name="categoria" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nome: </Form.Label>
                <Form.Control type="text" name="nome" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Logradouro: </Form.Label>
                <Form.Control type="text" name="logradouro" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Numero: </Form.Label>
                <Form.Control type="number" name="numero" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Complemento: </Form.Label>
                <Form.Control type="text" name="complemento" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Cidade: </Form.Label>
                <Form.Control type="text" name="cidade" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Estado: </Form.Label>
                <Form.Control type="text" name="estado" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>CEP: </Form.Label>
                <Form.Control type="text" name="cep" onChange={handleChange} required/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Contato: </Form.Label>
                <Form.Control type="text" name="contato" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Telefone: </Form.Label>
                <Form.Control type="text" name="telefone" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email: </Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} />
            </Form.Group>
            <Form.Group>
                <Form.Label>Site: </Form.Label>
                <Form.Control type="text" name="site_parceiro" onChange={handleChange} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <button className="btn-purple" onClick={props.onHide}>Cancelar</button>
            {' '}
            <button className="btn-purple" onClick={enviaParceiro}>Cadastrar</button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
  
  function ModalCadastro() {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <button className="btn-purple" onClick={() => setModalShow(true)}>
          Cadastrar Parceiro
        </button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default ModalCadastro;