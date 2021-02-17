import React from 'react';
import { Jumbotron, Container, Card, Row, Col, Button } from "react-bootstrap";
import Carousel from '../../Components/Carousel/Carousel';
import CarouselComCards from '../../Components/Carousel/CarouselComCards';

const Home = () => {

  const redirecionar = () => {
    window.location.href = "http://localhost:5001/chat"
  }
  return (
    <Container fluid>
      <Carousel />
      <Container>

        <Row style={{ marginTop: '55%', position: 'relative' }} className="justify-content-md-center">

          <Col md={12} >
            <Jumbotron fluid id="jumbotron">

              <h4> É SOBRE SALVAR VIDAS E ENTREGAR RECOMEÇOS E ESPERANÇAS </h4>

              <p>
                Aspiramos que mesmo diante do desespero, nenhuma mulher decida
                pelo abandono do recém-nascido, mas que procure os serviços
                existentes e seja bem e prontamente atendida, num ambiente capaz
                de lhe oferecer o acolhimento adequado, protegida de toda forma de
                discriminação e preconceito.
              </p>

            </Jumbotron>
          </Col>
        </Row>


        <Row className="justify-content-md-center">

          <Col md={12} style={{ color: "#952790", fonteFamyli: 'Segoe UI' }}>

            <h2>ENTREGAR É DIFERENTE DE ABANDONAR</h2>

            <Row className="justify-content-md-start">
              <Col style={homeRow1} md={4}>
                <p>Entregar um bebê à Justiça (ao Fórum) para adoção é um direito garantido por lei. Entregar é diferente de abandonar. A entrega do bebê para a Justiça não é crime.
                  </p>
              </Col>
            </Row>

            <Row className="justify-content-md-center">
              <Col style={homeRow2} md={4}>
                <p>
                  O Estatuto da Criança e do Adolescente também prevê a assistência psicológica necessária para o processo de decisão da mãe.
                  </p>
              </Col>
            </Row>

            <Row className="justify-content-md-end">
              <Col style={homeRow3} md={4}>
                <p>
                  Procure um psicólogo ou assistente social (no Fórum) para mais informações. A mulher poderá decidir com mais segurança sobre a entrega do bebê para adoção e, durante o acompanhamento, terá a liberdade para mudar da ideia, caso desista da entrega.
                  </p>
              </Col>
            </Row>
            <Row className="justify-content-md-end">
              <Col style={homeRow1} md={3}>
                <p>
                  Prometer ou entregar um bebê a terceiros mediante pagamento ou recompensa é crime, assim como registrar um bebê de outra pessoa como se fosse seu filho. Também é crime abandonar o bebê em locais públicos.
                  </p>
              </Col>
              <Col style={homeRow4} md={6}>
                <p>
                  Se o bebê é entregue de forma ilegal, corre o risco de ser oferecido a uma família despreparada e não receber proteção, afeto e cuidados para se desenvolver. Além disso, o bebê pode ser retirado desta família pela Justiça e encaminhado para uma instituição de acolhimento (abrigo), onde aguardará para ser adotado de forma legal.
                  </p>
              </Col>
              <Col style={homeRow2} md={3}>
                <p>
                  Quando uma mulher entrega o bebê de forma legalizada, ele será entregue para uma família que foi avaliada e habilitada pela Vara da Infância e Juventude para dedicar cuidados adequados a uma criança. A entrega legal torna este processo mais rápido.
                  </p>
              </Col>

            </Row>
            <Row className="justify-content-md-center">
              <Col style={homeRow5} md={9}>
                <p>
                  Profissionais da saúde, da assistência social, representantes religiosos e líderes comunitários devem fazer a imediata comunicação ao judiciário ao ter conhecimento de casos de mãe ou gestante interessada em entregar o bebê para adoção. A Lei nº 12.010 de 2009, art. 258-B prevê penalizações e pagamento de multas caso a lei não seja cumprida.
                  </p>
              </Col>
            </Row>

          </Col>

        </Row>




      </Container>

      <Row style={bg} className="justify-content-md-center">

        <Col md={8} >




          <h4 style={{fontSize:'50px', color:'white', margin:'15px'}}> É CRIME </h4>


          <Row className="justify-content-md-center">
              <Col style={homeRow6} md={12}>
              <p>
            Praticar aborto clandestino e, portanto, ilegal,
            correndo sérios riscos de vida e, inclusive, de
            responder a processo criminal;
                  </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col style={homeRow6} md={11}>
              <p>
            Abandone o filho recém-nascido, podendo causar a morte
            da criança, sonegando-lhe, assim, o direito à vida,
            hipótese em que também responderá criminalmente;
                  </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col style={homeRow6} md={10}>
              <p>
            Entregue (de forma gratuita ou negociada) o filho
            recém-nascido a pessoas estranhas, sem laços de
            parentesco, geralmente despreparadas, sem projeto de
            adoção e que, por vezes, escondem da criança a própria
            história. Esse procedimento também pode configurar
            crime;
                  </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col style={homeRow6} md={9}>
              <p>
            Contribua para que o sistema legal de adoção seja
            totalmente desrespeitado, burlando-se a ordem
            cronológica do Sistema Nacional de Adoção e culminando
            com as denominadas “adoções à brasileira”, “adoção
            direta”, “adoção intuito personae” ou “adoção dirigida”.
                  </p>
              </Col>
            </Row>
          
          
          
        



        </Col>
      </Row>
      <Button onClick={redirecionar}>CHAT</Button>
    </Container>

  );
};

export default Home;

const bg = {
  background: 'linear-gradient(90deg, rgba(2,155,124,1) 0%, rgba(2,155,124,1) 50%, rgba(2,155,124,1) 100%)',
  minWidth: '350px',
}

const homeRow1 = {
  borderLeft: '6px solid #ffe76d',
  borderRadius: '25px'
}
const homeRow2 = {
  borderBottom: '6px solid #ffe76d',
  borderRadius: '50px'
}
const homeRow3 = {
  borderRight: '6px solid #ffe76d',
  borderRadius: '25px'
}
const homeRow4 = {
  borderTop: '6px solid #ffe76d',
  borderRadius: '50px',
  padding:'15px'
}

const homeRow5 = {
  borderLeft: '6px solid #ffe76d',
  borderBottom: '6px solid #ffe76d',
  borderRadius: '50px 50px',
  padding:'15px'
 
}
const homeRow6 = {
  borderLeft: '15px solid rgba(119,253,224,1)',
  borderBottom: '15px solid rgba(119,253,224,1)',
  borderRadius: '50px 50px',
  padding:'15px',
  color:'white'
}