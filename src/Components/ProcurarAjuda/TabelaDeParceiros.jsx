import React from 'react'
import { Table} from 'react-bootstrap';


function TabelaDeParceiros(props) {
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>Parceiro</th>
        <th>Endereço</th>
        <th>Telefone</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>parceiro1</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>endereco</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>telefone</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </Table>

   
  );
};

export default TabelaDeParceiros
