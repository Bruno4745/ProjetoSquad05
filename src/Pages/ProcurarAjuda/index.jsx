import React from "react";
import { Container, Form, Button, Table } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
<<<<<<< HEAD
import ModalCadastro from "../../Components/ProcurarAjuda/ModalCadastro";
import Filtro from "../../Components/ProcurarAjuda/Filtro";
=======
import ModalLogin from "../../Components/ProcurarAjuda/Login";
>>>>>>> 80a4347031cef0ff29f905d5348d6ad4ebbe9b5d

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
<<<<<<< HEAD
      <ModalCadastro/>
      < Filtro/>
=======
      <ModalLogin/>
>>>>>>> 80a4347031cef0ff29f905d5348d6ad4ebbe9b5d
    </Container>
  );
};

export default ProcurarAjuda;
