import React, { useState } from 'react';
import { Form } from 'react-bootstrap'

const Denuncia = () => {

  // Definindo um state vazio
  const [dadosForm] = useState({
    nome_do_estabelecimento: '',
    endereco: '',
    horario: '',
    mensagem: ''
  })

  // Inserindo os valores no state
  function handleChange(evento){
      dadosForm[evento.target.name] = evento.target.value;
      console.log(dadosForm);
  }

    const enviaDenuncia = async (evento) => {
        const url = "http://localhost:5000/faleconosco/denuncia";
        await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(dadosForm)
        });
    }

    return(
        <>
       
          <h2>Denúncia</h2>
          <Form onSubmit={enviaDenuncia} className="my-2">
            <Form.Group controlId="nome">
              <Form.Label>Nome do estabelecimento: </Form.Label>
              <Form.Control name="nome_do_estabelecimento" type="text" placeholder="Ex. Hospital/UBS/UPA" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="endereco">
              <Form.Label>Endereço: </Form.Label>
              <Form.Control name="endereco" type="endereco" placeholder="Ex. Rua..." onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="horario">
              <Form.Label>Horário do atendimento:</Form.Label>
              <Form.Control name="horario" type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="mensagem">
              <Form.Label>O que ocorreu? </Form.Label>
              <Form.Control name="mensagem" as="textarea" rows={5} placeholder="Descreva como foi o atendimento" onChange={handleChange} />
            </Form.Group>
            
            <button className="btn-purple" type="submit">Enviar</button>
          </Form>
     
      </>
    )
};

export default Denuncia;