import React from 'react'
import editar from './imagens/editar.png';
import excluir from './imagens/excluir.png';


function TabelaDeParceiros(props) {
  return (
      <tr>
        <td>{props.nome}</td>
        <td>{props.cidade}</td>
        <td>{props.telefone}</td>
        <td className="text-center"><a className="mr-2" href={`https://unfadable-air.000webhostapp.com/api/alterarparceiro.php?id=${props.id}`}><img src={editar} alt="Editar" width="25px"></img></a>{' '}
        <a href={`https://unfadable-air.000webhostapp.com/api/excluirparceiro.php?id=${props.id}`}><img src={excluir} alt="Excluir" width="25px"></img></a></td>
      </tr>
  );
};

export default TabelaDeParceiros
