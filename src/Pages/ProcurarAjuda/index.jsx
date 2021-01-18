import React from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
const ProcurarAjuda = () => {
  return (
  /*const [sejaumparceiro, setSejaUmParceiro] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(``);
      const dados = await resposta.json();
      setSejaUmParceiro(dados);
    }
    fetchData()
  }, []);*/
     <Container>

      <div>
         <TabelaDeParceiros/>
         </div>
         
      <div>
        <h2>Seja um Parceiro</h2>
        <Form>
          <Form.Group controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite nome da organização/empresa"
              name="nome"/>
          </Form.Group>
          <Form.Group controlId="telefone">
            <Form.Label>Telefone (whatsapp): </Form.Label>
            <Form.Control
              type="text"
              placeholder="(XX) - (XXXXX-XXXX)"
              name="telefone" />
          </Form.Group>
          <Form.Group controlId="endereco">
            <Form.Label>Endereço: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o endereço"
              name="endereco"/>
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
    </Container>
   
  )
}

export default ProcurarAjuda;
