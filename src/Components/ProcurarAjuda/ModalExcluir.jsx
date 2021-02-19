import React from 'react'
import excluir from './imagens/excluir.png';
import { Modal, Button } from "react-bootstrap";

export default function ModalExcluir(props) {

    function MyVerticallyCenteredModal(propsModal) {    

        //Ao confirmar a exclusao, eh chamada esta funcao para excluir o registro
        const realizarExclusao = async (evento) => {
            evento.preventDefault();
            await fetch(`https://protected-sierra-12413.herokuapp.com/procurarAjuda/${props.conteudo.id}`, {
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
                <button className="btn-purple" onClick={propsModal.onHide}>Cancelar</button>
                {' '}
                <button className="btn-purple" onClick={realizarExclusao}>Excluir</button>
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
