import React from 'react'
import excluir from './imagens/excluir.png';
import { Modal, Button, Row, Form } from "react-bootstrap";

export default function ModalExcluir(props) {

    function MyVerticallyCenteredModal(propsModal) {    

        //Ao confirmar a exclusao, eh chamada esta funcao para excluir o registro
        const realizarExclusao = async () => {
            await fetch(`http://localhost:5000/procurarAjuda/${props.conteudo.id}`, {
                method: "DELETE"
            })
            window.location.reload();
        };

        return (
            <Modal
                {...propsModal}
                dialogClassName="modal-50w" 
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Excluir
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Confirma a exclusao de: {props.conteudo.id} - {props.conteudo.nome} ?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-primary" onClick={propsModal.onHide}>Cancelar</Button>
                <Button variant="outline-primary" onClick={realizarExclusao}>Excluir</Button>
            </Modal.Footer>
            </Modal>
        );
    }

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Button variant="outline-light" onClick={() => setModalShow(true)}>
                <img src={excluir} alt="Excluir" width="25px"></img>
            </Button>

            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} /> 
        </>
    )
}
