import React from 'react'
import ModalEditar from './ModalEditar'
import ModalExcluir from './ModalExcluir'


function TabelaDeParceiros(props) {

    return (
        <tr>
          <td>{props.nome}</td>
          <td>{props.cidade}</td>
          <td>{props.telefone}</td>
          <td className="text-center">
            <ModalEditar conteudo={props} />
            {' '}
            <ModalExcluir conteudo={props} />
          </td>
        </tr>
    );
};

export default TabelaDeParceiros
