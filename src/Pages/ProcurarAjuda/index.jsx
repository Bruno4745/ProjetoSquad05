import React from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
import ModalLogin from "../../Components/ProcurarAjuda/Login";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "http://localhost/ProjetoSquad05/php/api/parceiro.php"
      );
      const dados = await resposta.json();
      setParceiros(dados);
    }
    fetchData();
  }, []);


  return (
    <Container>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Parceiro</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>Acao</th>
            </tr>
          </thead>
          <tbody>
            {parceiros &&
              parceiros.map((item) => (
                <TabelaDeParceiros
                  key={item.id_parceiros}
                  id={item.id_parceiros}
                  nome={item.nome}
                  cidade={item.cidade}
                  telefone={item.telefone}
                />
              ))}
          </tbody>
        </Table>
      </div>

      <div>
        <h2>Seja um Parceiro</h2>
        <Form>
          <Form.Group controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite nome da organização/empresa"
              name="nome"
            />
          </Form.Group>
          <Form.Group controlId="telefone">
            <Form.Label>Telefone (whatsapp): </Form.Label>
            <Form.Control
              type="text"
              placeholder="(XX) - (XXXXX-XXXX)"
              name="telefone"
            />
          </Form.Group>
          <Form.Group controlId="endereco">
            <Form.Label>Endereço: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o endereço"
              name="endereco"
            />
          </Form.Group>
          <Form.Group controlId="mensagem">
            <Form.Label>Mensagem: </Form.Label>
            <Form.Control as="textarea" rows={3} name="mensagem" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </div>
        
        <div className="mt-5">
        <ModalLogin/>
        </div>
       

    </Container>
  );
};

export default ProcurarAjuda;
