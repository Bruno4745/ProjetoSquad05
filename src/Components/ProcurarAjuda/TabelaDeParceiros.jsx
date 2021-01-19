import React from 'react'
import editar from './imagens/editar.png';
import excluir from './imagens/excluir.png';


function TabelaDeParceiros(props) {
  return (
      <tr>
        <td>{props.nome}</td>
        <td>{props.cidade}</td>
        <td>{props.telefone}</td>
        <td><a href={`http://localhost/ProjetoSquad05/php/api/alterarparceiro.php?id=${props.id}`}><img src={editar} alt="Editar" width="30px"></img></a>{' '}
        <a href={`http://localhost/ProjetoSquad05/php/api/excluirparceiro.php?id=${props.id}`}><img src={excluir} alt="Excluir" width="30px"></img></a></td>
      </tr>
  );
};

export default TabelaDeParceiros
