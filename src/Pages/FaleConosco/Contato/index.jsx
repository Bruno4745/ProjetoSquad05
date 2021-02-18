import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
const Contatos = () => {

  // Definindo um state vazio
  const [dadosForm] = useState({
      nome: '',
      email: '',
      mensagem: ''
  })

  // Inserindo os valores no state
  function handleChange(evento){
      dadosForm[evento.target.name] = evento.target.value;
      console.log(dadosForm);
  }

    const enviaMensagem = async (evento) => {
        evento.preventDefault();
        // console.log(dadosForm);
        const url = "https://protected-sierra-12413.herokuapp.com/faleconosco/contato";
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        })
    }

    return (
      <>
          <h2>Contatos</h2>
          <Form onSubmit={enviaMensagem} className="my-2">
            <Form.Group controlId="nome">
              <Form.Label>Nome: </Form.Label>
              <Form.Control name="nome" type="text" placeholder="Digite seu nome" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control name="email" type="email" placeholder="nome@email.com.br" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="mensagem">
              <Form.Label>Mensagem: </Form.Label>
              <Form.Control name="mensagem" as="textarea" rows={3} onChange={handleChange} />
            </Form.Group>
            <button className="btn-purple" type="submit">Enviar</button>
          </Form>
      
      </>
    );
};

export default Contatos;