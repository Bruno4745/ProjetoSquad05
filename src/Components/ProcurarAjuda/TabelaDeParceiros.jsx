import React from 'react'


function TabelaDeParceiros(props) {
  return (
      <tr>
        <td>{props.nome}</td>
        <td>{props.cidade}</td>
        <td>{props.telefone}</td>
      </tr>
  );
};

export default TabelaDeParceiros
