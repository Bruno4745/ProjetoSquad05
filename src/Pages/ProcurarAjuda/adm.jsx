import React from "react";
import { Container, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceirosAdm";
import ModalCadastro from "../../Components/ProcurarAjuda/ModalCadastro";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "https://protected-sierra-12413.herokuapp.com/procurarAjuda"
      );
      const dados = await resposta.json();
      console.log(`dados: ${dados}`);
      setParceiros(dados);
    }
    fetchData();
  }, []);


  return (
    <Container>
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
              categoria={item.categoria}
              nome={item.nome}
              logradouro={item.logradouro}
              numero={item.numero}
              complemento={item.complemento}
              cidade ={item.cidade}
              estado={item.estado}
              cep={item.cep}
              contato={item.contato}
              telefone = {item.telefone}
              email={item.email}
              site_parceiro={item.site_parceiro} />
          ))}
          </tbody>
        </Table>
      <ModalCadastro/>
      {' '}
      <button className="btn-purple">
        <a href="https://projeto-squad05.vercel.app/procurarAjuda" style={{color: "white", textDecoration: "none"}}>Sair</a>
      </button>
    </Container>
  );
};

export default ProcurarAjuda;
