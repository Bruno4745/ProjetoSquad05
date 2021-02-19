import React from 'react'
import editar from './imagens/editar.png';
import { Modal, Button, Form } from "react-bootstrap";


export default function ModalEditar(props) {

    function MyVerticallyCenteredModal(propsModal) {    

        //Captura dados do banco e insere no formulario
        const [dadosForm]  = React.useState({
            categoria: `${props.conteudo.categoria}`,
            nome: `${props.conteudo.nome}`,
            logradouro: `${props.conteudo.logradouro}`,
            numero: `${props.conteudo.numero}`,
            complemento: `${props.conteudo.complemento}`,
            cidade: `${props.conteudo.cidade}`,
            estado: `${props.conteudo.estado}`,
            cep: `${props.conteudo.cep}`,
            contato: `${props.conteudo.contato}`,
            telefone: `${props.conteudo.telefone}`,
            email: `${props.conteudo.email}`,
            site_parceiro: `${props.conteudo.site_parceiro}`
        })

        //Atualiza dados do formulario conforme alteracoes
        function handleChange(evento){
            dadosForm[evento.target.name] = evento.target.value;
            console.log(dadosForm);
        }
        
        //Funcao para realizar a alteracao das informacoes
        const atualizarParceiro = async (evento) => {
            evento.preventDefault();
            await fetch(`https://protected-sierra-12413.herokuapp.com/procurarAjuda/${props.conteudo.id}`, {
                method: "PUT",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(dadosForm)
            })
            window.location.reload();
        }

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
            <Form>
                <Modal.Body>
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
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn-purple" onClick={propsModal.onHide}>Cancelar</button>
                    {' '}
                    <button className="btn-purple" onClick={atualizarParceiro}>Editar</button>
                </Modal.Footer>
            </Form>
            </Modal>
        );
    }
    
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-light" onClick={() => setModalShow(true)}>
            <img src={editar} alt="Editar" width="25px"></img>
            </Button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />   
        </>
    )
}
