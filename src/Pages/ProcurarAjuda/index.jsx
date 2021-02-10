import React from "react";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
import ModalLogin from "../../Components/ProcurarAjuda/Login";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "http://localhost:5000/procurarAjuda"
      );
      const dados = await resposta.json();
      setParceiros(dados);
    }
    fetchData();
  }, []);


  return (
    <Container>
      <Row>
        {parceiros && parceiros.map(item => (
          <TabelaDeParceiros
            key={item.id_parceiros}
            id={item.id_parceiros}
            nome={item.nome}
            cidade={item.cidade}
            telefone={item.telefone} />
        ))}
      </Row>
      <ModalLogin/>
    </Container>
  );
};

export default ProcurarAjuda;