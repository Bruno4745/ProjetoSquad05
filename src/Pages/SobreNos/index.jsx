import React from "react";
import { useEffect, useState } from "react";
import Squad from "../../Components/SobreNos";
import { Container, Row, Col } from "react-bootstrap";
import '../jumbotron.css'
import about from './img/about.jpg'
import about2 from './img/about2.jpg'
export default function SobreNos() {
  const [squad, setSquad] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(`https://protected-sierra-12413.herokuapp.com/squad`);
      const dados = await resposta.json();
      setSquad(dados);
    }
    fetchData()
  }, []);

  return (
    <Container style={{ color: "#952790" }}>


      <Row className="mt-3">
        <Col md={12} >

          <h1>Sobre Nós</h1>

        </Col>
      </Row>



      <Row className='mt-2'>

        <Col xs={12} sm={12} md={9} lg={6}>
          <img src={about} style={{ width: "100%" }} alt="" />
        </Col>
        <Col xs={12} sm={12} md={9} lg={6}>

          <Row style={sobreNosQuemSomos}  >
            <h4 style={{ color:"rgb(2, 155, 124)", textAlign: "right" }}>Quem Somos</h4>
            <p> Somos um grupo de estudante da Recode Pro, com formação em
            desenvolvimento Full Stack, e temos como objetivo atender a um dos
            objetivos de desenvolvimento sustentável da ONU, dentro do tema saúde
          e bem-estar.</p>
          </Row>

          <Row style={sobreNosQuemSomos}>
            <p>Para isso, optamos por disceminar sobre o direito a
            entrega voluntária, direito este resguardado em lei federal nº
            13.509/2017, chamada de “Lei da Adoção”, que trouxe alterações ao
            Estatuto da Criança e do Adolescente - ECA e incluindo a chamada
          “entrega voluntaria”.</p>
          </Row>

        </Col>
      </Row>

      <Row style={SobreNosJustificativa}>


        <Col md={6} lg={6} >
          <h3 style={{ color: "#fff" }}>Justificativas</h3>
          <li>Abandono de crianças recém-nascidas;</li>
          <li> A existência de grande número de adoções irregulares;</li>
        </Col>
        <Col md={6} lg={6}>
          <li>
            Pais que não querem ou não têm condições de cuidar de seus filhos, ao
            invés de entregarem os bebês ou as crianças na Vara da Infância e
            Juventude, abandonam os filhos ou os entregam a terceiros (vizinhos,
            padrinhos, colegas de trabalho etc), às vezes mediante pagamento ou
            promessa de recompensa.
        </li>
        </Col>

      </Row>


      <Row style={SobreNosObjetivos}>

        <h4 style={{ color: "rgb(2, 155, 124)" }}>Objetivos</h4>
        <Col md={12} style={textGrey}>
          <li>
            Orientar técnicos que trabalham na Rede de Proteção (CREAS, CRAS,
            Hospitais Públicos, Postos de Saúde, entidades de acolhimento, CAPS,
            Conselhos Tutelares etc) sobre a legalidade da entrega voluntária para
            adoção e como devem atuar diante de atendimento de casos em que os
            pais manifestam o desejo de entregar o(a) filho(a) para adoção;
        </li>
        </Col>

        <Col md={6} style={textGrey}>

          <li>
            Informar aos pais que é possível e está prevista em lei a entrega
            voluntária de filho para adoção na Vara da Infância e Juventude e
            orientá-los acerca do procedimento a ser adotado, esclarecendo que não
            constitui crime a entrega e não há nenhum tipo de responsabilização
            dos pais;
        </li>
        </Col>

        <Col md={6} style={textGrey}>
          <li>
            Conscientizar as pessoas que têm interesse em adotar quanto ao
            procedimento previsto em lei para a adoção e sobre a importância de
            ser rigorosamente observada a legislação de regência da matéria.
        </li>
        </Col>

      </Row>





      <Row className='mt-2' style={SobreNosParceiros}>
        <Col xs={12} sm={12} md={9} lg={6}>

          <Row style={textGrey}>
            <h4 style={{ color: "#952790" }}>Parceiros</h4>
            <li>
              Dr. antonio Carlos Berlini - Presidente da AGASESP - Associação dos
              grupos de apoio à adoção do Estado de São Paulo
        </li>
            <li>Grupo de Apoio a Adoção de Mauá.</li>
          </Row>

          <Row style={textGrey} >
            <li>
              Madrinha do Projeto Sônia Borges - Somos eternamente gratos por nos
              apresentar este tema, e por saber transmitir com tanto carinho o
              conhecimento de um assunto tão delicado.
        </li>
          </Row>

        </Col>
        <Col xs={12} sm={12} md={9} lg={6}>
          <img className='mt-5' src={about2} alt="" style={{ width: "100%" }} />
        </Col>

      </Row>

      <h3 style={{ color: "#952790" }}>Mais Sobre Nós</h3>

      <Row className='w-100 mx-auto' style={textGrey}>
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

    </Container>
  );
}


const sobreNosQuemSomos = {
  borderRight: '3px solid rgb(2, 155, 124)',
    color:"rgb(166,166,166)"
}

const SobreNosJustificativa = {
  color:"#fff",
  background: 'rgb(2, 155, 124)',
  margin: '10px 0',
  padding: '10px',
  borderRadius: '5px'
};

const SobreNosObjetivos = {
  margin: '10px 0',
  padding: '10px',
  borderLeft: '3px solid rgb(2, 155, 124)',
  
};

const SobreNosParceiros = {
  margin: '10px 0',
}

const textGrey = {
  color:"rgb(166,166,166)"
}