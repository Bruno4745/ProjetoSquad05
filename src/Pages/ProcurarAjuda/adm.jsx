import React from "react";
import { Container, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceirosAdm";
import ModalCadastro from "../../Components/ProcurarAjuda/ModalCadastro";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "https://unfadable-air.000webhostapp.com/api/parceiro.php"
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
            <th>Cidade</th>
            <th>Telefone</th>
            <th>Ação</th>
          </tr>
        </thead>
        <tbody>
         {parceiros && parceiros.map(item => (
              <TabelaDeParceiros 
                key={item.id_parceiros}
                id={item.id_parceiros}
                nome={item.nome}
                cidade ={item.cidade}
                telefone = {item.telefone}/>
            ))}
            </tbody>
          </Table>
      </div>         
      <ModalCadastro/>
      {' '}
      <Button href="https://projeto-squad05.vercel.app/procurarAjuda">Sair</Button>
    </Container>
  );
};

export default ProcurarAjuda;
