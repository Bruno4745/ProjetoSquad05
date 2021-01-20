import React from "react";
import { useEffect, useState } from "react";
import Squad from "../../Components/SobreNos";
import { Jumbotron, Container, Row } from "react-bootstrap";

export default function SobreNos() {
  const [squad, setSquad] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(`https://unfadable-air.000webhostapp.com/api/squad.php`);
      const dados = await resposta.json();
      setSquad(dados);
    }
    fetchData()
  }, []);

  return (
    <Container>
      <Jumbotron>
        <h1>Sobre Nós</h1>
      </Jumbotron>
      <h2>Quem Somos</h2>
      <ul>
        <li>
          Somos um grupo de estudante da Recode Pro, com formação em
          desenvolvimento Full Stack, e temos como objetivo atender a um dos
          objetivos de desenvolvimento sustentável da ONU, dentro do tema saúde
          e bem-estar. Para isso, optamos por disceminar sobre o direito a
          entrega voluntária, direito este resguardado em lei federal nº
          13.509/2017, chamada de “Lei da Adoção”, que trouxe alterações ao
          Estatuto da Criança e do Adolescente - ECA e incluindo a chamada
          “entrega voluntaria”.
        </li>
      </ul>

      <h2>Justificativas</h2>
      <ul>
        <li> A existência de grande número de adoções irregulares;</li>
        <li>Abandono de crianças recém-nascidas;</li>
        <li>
          Pais que não querem ou não têm condições de cuidar de seus filhos, ao
          invés de entregarem os bebês ou as crianças na Vara da Infância e
          Juventude, abandonam os filhos ou os entregam a terceiros (vizinhos,
          padrinhos, colegas de trabalho etc), às vezes mediante pagamento ou
          promessa de recompensa.
        </li>
      </ul>
      <h2>Objetivos</h2>
      <ul>
        <li>
          Orientar técnicos que trabalham na Rede de Proteção (CREAS, CRAS,
          Hospitais Públicos, Postos de Saúde, entidades de acolhimento, CAPS,
          Conselhos Tutelares etc) sobre a legalidade da entrega voluntária para
          adoção e como devem atuar diante de atendimento de casos em que os
          pais manifestam o desejo de entregar o(a) filho(a) para adoção;
        </li>
        <li>
          Informar aos pais que é possível e está prevista em lei a entrega
          voluntária de filho para adoção na Vara da Infância e Juventude e
          orientá-los acerca do procedimento a ser adotado, esclarecendo que não
          constitui crime a entrega e não há nenhum tipo de responsabilização
          dos pais;
        </li>
        <li>
          Conscientizar as pessoas que têm interesse em adotar quanto ao
          procedimento previsto em lei para a adoção e sobre a importância de
          ser rigorosamente observada a legislação de regência da matéria.
        </li>
      </ul>
      <h2>Parceiros</h2>
      <ul>
        <li>
          Dr. antonio Carlos Berlini - Presidente da AGASESP - Associação dos
          grupos de apoio à adoção do Estado de São Paulo
        </li>
        <li>Grupo de Apoio a Adoção de Mauá.</li>
        <li>
          Madrinha do Projeto Sônia Borges - Somos eternamente gratos por nos
          apresentar este tema, e por saber transmitir com tanto carinho o
          conhecimento de um assunto tão delicado.
        </li>
      </ul>

      <div>
        <h2>Mais Sobre Nós</h2>
        <Row className='w-100 mx-auto'>
          {squad &&
            squad.map((item) => (
              <Squad
                key={item.id_integrante}
                id={item.id_integrante}
                nome={item.nome}
                foto={require(`${item.foto}`).default}
                linkedin={item.linkedin}
                github={item.github}
                funcao={item.funcao}
              />
            ))}
        </Row>
      </div>
    </Container>
  );
}
