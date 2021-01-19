import React from 'react'


function TabelaDeParceiros(props) {
  return (
      <tr>
        <td>{props.nome}</td>
        <td>{props.cidade}</td>
        <td>{props.telefone}</td>
        <td><a href={`http://localhost/ProjetoSquad05/php/api/excluirparceiro.php?id=${props.id}`}>Excluir</a> 
        <a href={`http://localhost/ProjetoSquad05/php/api/alterarparceiro.php?id=${props.id}`}>Alterar</a></td>
      </tr>
  );
};

export default TabelaDeParceiros
