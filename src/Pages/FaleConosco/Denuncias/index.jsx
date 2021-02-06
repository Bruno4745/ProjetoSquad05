import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'

const Denuncia = () => {

    const enviaDenuncia = async (evento) => {
        const url = "http://localhost/ProjetoSquad05/php/api/denuncia.php";
        const dados = new FormData(evento.target);
        await fetch(url, {
            method: "POST",
            body: dados
        });
    }

    return(
        <Container>
        <div className="my-4">
          <h2>Denúncia</h2>
          <Form onSubmit={enviaDenuncia} className="my-4">
            <Form.Group controlId="nome">
              <Form.Label>Nome do estabelecimento: </Form.Label>
              <Form.Control name="nome_do_estabelecimento" type="text" placeholder="Ex. Hospital/UBS/UPA" />
            </Form.Group>
            <Form.Group controlId="endereco">
              <Form.Label>Endereço: </Form.Label>
              <Form.Control name="endereco" type="endereco" placeholder="Ex. Rua..." />
            </Form.Group>
            <Form.Group controlId="horario">
              <Form.Label>Horário do atendimento </Form.Label>
              <Form.Control name="horario" type="text" />
            </Form.Group>
            <Form.Group controlId="mensagem">
              <Form.Label>O que ocorreu? </Form.Label>
              <Form.Control name="mensagem" as="textarea" rows={10} placeholder="Descreva como foi o atendimento" />
            </Form.Group>
            
            <Button variant="primary" type="submit">Enviar</Button>
          </Form>
        </div>
      </Container>
    )
};

export default Denuncia;