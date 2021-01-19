import React from 'react';
import { Form, Button, Container } from 'react-bootstrap'

const Contatos = () => {
    return (
      <Container>
        <div className="my-4">
          <h2>Contatos</h2>
          <Form>
            <Form.Group controlId="nome">
              <Form.Label>Nome: </Form.Label>
              <Form.Control type="text" placeholder="Digite seu nome" />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" placeholder="nome@email.com.br" />
            </Form.Group>
            <Form.Group controlId="mensagem">
              <Form.Label>Mensagem: </Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </Container>
    );
};

export default Contatos;