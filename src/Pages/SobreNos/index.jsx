import React from "react";
import { useEffect, useState } from "react";
import Squad from "../../Components/SobreNos";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import '../jumbotron.css'
import about from './img/about.jpg'
export default function SobreNos() {
  const [squad, setSquad] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(`http://localhost:5000/squad`);
      const dados = await resposta.json();
      setSquad(dados);
    }
    fetchData()
  }, []);

  return (
    <Container>


      <Row className>
        <Col md={12}>
        
            <h1>Sobre Nós</h1>
      
        </Col>
      </Row>


     
      <Row className='mt-5'>
        
        <Col md={5}>
          <img className='mx-5' src={about} style={{width:"100%"}} alt=""/>
        </Col>
        <Col md={7}>

          <Row className='mx-5'>
            <h2>Quem Somos</h2>
            <p> Somos um grupo de estudante da Recode Pro, com formação em
            desenvolvimento Full Stack, e temos como objetivo atender a um dos
            objetivos de desenvolvimento sustentável da ONU, dentro do tema saúde
          e bem-estar.</p>
          </Row>

          <Row className='mx-5' >
            <p>Para isso, optamos por disceminar sobre o direito a
            entrega voluntária, direito este resguardado em lei federal nº
            13.509/2017, chamada de “Lei da Adoção”, que trouxe alterações ao
            Estatuto da Criança e do Adolescente - ECA e incluindo a chamada
          “entrega voluntaria”.</p>
          </Row>

        </Col>
      </Row>

      <Row style={SobreNos_div}>

        <h2>Justificativas</h2>
        <Col md={6}>
          <li>Abandono de crianças recém-nascidas;</li>

          <li> A existência de grande número de adoções irregulares;</li>
        </Col>

       

        <Col md={6}>
          <li>
            Pais que não querem ou não têm condições de cuidar de seus filhos, ao
            invés de entregarem os bebês ou as crianças na Vara da Infância e
            Juventude, abandonam os filhos ou os entregam a terceiros (vizinhos,
            padrinhos, colegas de trabalho etc), às vezes mediante pagamento ou
            promessa de recompensa.
        </li>
        </Col>

      </Row>


      <Row className='mt-5' style={SobreNos_div2}>

        <h2>Objetivos</h2>
        <Col md={12}>
          <li>
            Orientar técnicos que trabalham na Rede de Proteção (CREAS, CRAS,
            Hospitais Públicos, Postos de Saúde, entidades de acolhimento, CAPS,
            Conselhos Tutelares etc) sobre a legalidade da entrega voluntária para
            adoção e como devem atuar diante de atendimento de casos em que os
            pais manifestam o desejo de entregar o(a) filho(a) para adoção;
        </li>
        </Col>

        <Col md={6}>

          <li>
            Informar aos pais que é possível e está prevista em lei a entrega
            voluntária de filho para adoção na Vara da Infância e Juventude e
            orientá-los acerca do procedimento a ser adotado, esclarecendo que não
            constitui crime a entrega e não há nenhum tipo de responsabilização
            dos pais;
        </li>
        </Col>

        <Col md={6}>
          <li>
            Conscientizar as pessoas que têm interesse em adotar quanto ao
            procedimento previsto em lei para a adoção e sobre a importância de
            ser rigorosamente observada a legislação de regência da matéria.
        </li>
        </Col>

      </Row>


      
     
    
      <Row className='mt-5'>
        <Col md={7}>

          <Row>
          <h2>Parceiros</h2>
          <li>
          Dr. antonio Carlos Berlini - Presidente da AGASESP - Associação dos
          grupos de apoio à adoção do Estado de São Paulo
        </li>
        <li>Grupo de Apoio a Adoção de Mauá.</li>
          </Row>

          <Row>
          <li>
          Madrinha do Projeto Sônia Borges - Somos eternamente gratos por nos
          apresentar este tema, e por saber transmitir com tanto carinho o
          conhecimento de um assunto tão delicado.
        </li>
          </Row>

        </Col>
        <Col md={5}>
        <img className='mt-5'  src={about} alt="" style={{width:"100%"}}/>
        </Col>
        
      </Row>

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
    
    </Container>
  );
}

  
  const SobreNos_div = {
    padding: '10px',
    borderTop:'6px solid #e6aee6',
    borderRight:'6px solid #e6aee6',
    marginTop: '30px',
    boxShadow: '0px 0px 8px 2px #e6aee6'
};

const SobreNos_div2 = {
 
  padding: '10px',
  borderLeft:'6px solid #e6aee6',
  borderBottom:'6px solid #e6aee6',
  
  
};