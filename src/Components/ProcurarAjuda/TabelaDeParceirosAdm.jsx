import React from 'react'
import editar from './imagens/editar.png';
import excluir from './imagens/excluir.png';
import { Modal, Button, Row, Form } from "react-bootstrap";


function TabelaDeParceiros(props) {

    //Ao confirmar a exclusao, eh chamada esta funcao para excluir o registro
    const realizarExclusao = async () => {
      await fetch(`http://localhost:5000/procurarAjuda/${props.id}`, {
          method: "DELETE"
      })
      window.location.reload();
    }
    
    const atualizarParceiro = async () => {
      await fetch(`http://localhost:5000/procurarAjuda/${props.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dadosForm)
      })
      window.location.reload();
    }

  //Modal para confirmar a exclusao
    const [modalExcluir, setModalExcluir] = React.useState(false);

    const ModalExcluir = (propsModal) => {
      return (
        <Modal
          {...propsModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Excluir
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              Confirma a exclusao de: {props.id} - {props.nome} ?
            </Row>
            <Row>
              <Button onClick={realizarExclusao}>Confirmar</Button>
            </Row>
            <Row>
              <Button onClick={propsModal.onHide}>Cancelar</Button>
            </Row>
          </Modal.Body>
        </Modal>
      );
    }

    //INICIO - capturar dados do formulario
    const [dadosForm, setDadosForm] = React.useState({
        categoria: `${props.categoria}`,
        nome: `${props.nome}`,
        logradouro: `${props.logradouro}`,
        numero: `${props.numero}`,
        complemento: `${props.complemento}`,
        cidade: `${props.cidade}`,
        estado: `${props.estado}`,
        cep: `${props.cep}`,
        contato: `${props.contato}`,
        telefone: `${props.telefone}`,
        email: `${props.email}`,
        site_parceiro: `${props.site_parceiro}`
    })

    function handleChange(evento){
        dadosForm[evento.target.name] = evento.target.value;
        console.log(dadosForm);
    }
    //FIM - capturar dados do formulario

    //Modal para aterar
    const [modalEditar, setModalEditar] = React.useState(false);

    const ModalEditar = (propsModal) => {
      return (
        <Modal
          {...propsModal}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Editar
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={atualizarParceiro}>
              <Form.Group>
                  <Form.Label>Categoria: </Form.Label>
                  <Form.Control type="text" name="categoria" defaultValue={dadosForm.categoria} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Nome: </Form.Label>
                  <Form.Control type="text" name="nome" defaultValue={dadosForm.nome} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Logradouro: </Form.Label>
                  <Form.Control type="text" name="logradouro" defaultValue={dadosForm.logradouro} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Numero: </Form.Label>
                  <Form.Control type="number" name="numero" defaultValue={dadosForm.numero} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Complemento: </Form.Label>
                  <Form.Control type="text" name="complemento" defaultValue={dadosForm.complemento} onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Cidade: </Form.Label>
                  <Form.Control type="text" name="cidade" defaultValue={dadosForm.cidade} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Estado: </Form.Label>
                  <Form.Control type="text" name="estado" defaultValue={dadosForm.estado} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>CEP: </Form.Label>
                  <Form.Control type="text" name="cep" defaultValue={dadosForm.cep} onChange={handleChange} required/>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Contato: </Form.Label>
                  <Form.Control type="text" name="contato" defaultValue={dadosForm.contato} onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Telefone: </Form.Label>
                  <Form.Control type="text" name="telefone" defaultValue={dadosForm.telefone} onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Email: </Form.Label>
                  <Form.Control type="email" name="email" defaultValue={dadosForm.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group>
                  <Form.Label>Site: </Form.Label>
                  <Form.Control type="text" name="site_parceiro" defaultValue={dadosForm.site_parceiro} onChange={handleChange} />
              </Form.Group>
                  <Button variant="primary" type="submit">Enviar</Button>
            </Form>
          {/* onClick={`https://localhost:5000/procurarAjudaAlterar/${props.id}`} */}
          </Modal.Body>
        </Modal>
      );
    }

    return (
        <tr>
          <td>{props.nome}</td>
          <td>{props.cidade}</td>
          <td>{props.telefone}</td>
          <td className="text-center">
            <Button variant="outline-light" onClick={() => setModalEditar(true)}>
            <img src={editar} alt="Editar" width="25px"></img>
            </Button>{' '}
            <Button variant="outline-light" onClick={() => setModalExcluir(true)}>
              <img src={excluir} alt="Excluir" width="25px"></img>
            </Button>
          </td>
          <ModalEditar show={modalEditar} onHide={() => setModalEditar(false)} />  
          <ModalExcluir show={modalExcluir} onHide={() => setModalExcluir(false)} />  
        </tr>
    );
};

export default TabelaDeParceiros
