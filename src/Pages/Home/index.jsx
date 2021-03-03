import React from 'react';
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap";
import Carousel from '../../Components/Carousel/Carousel';


const Home = () => {

 
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

          <Col md={12} style={{color:"rgb(166,166,166)"}}>

            
            <h3 style={{margin:'15px'}}><span>ENTREGAR É DIFERENTE </span><strong style={{ color: "#952790"}}>DE ABANDONAR</strong></h3>
           

            <Row className="justify-content-md-start" style={{color:"rgb(166,166,166)"}}>
              <Col style={homeRow1} md={6}>
                <p>Entregar um bebê à Justiça (ao Fórum) para adoção é um direito garantido por lei. Entregar é diferente de abandonar. A entrega do bebê para a Justiça não é crime.
                  </p>
              </Col>
              <Col style={homeRow2} md={6}>
                <p>
                  O Estatuto da Criança e do Adolescente também prevê a assistência psicológica necessária para o processo de decisão da mãe.
                  </p>
              </Col>
            </Row>

         

            <Row className="justify-content-md-end">
              <Col style={homeRow2} md={6}>
                <p>
                  Procure um psicólogo ou assistente social (no Fórum) para mais informações. A mulher poderá decidir com mais segurança sobre a entrega do bebê para adoção e, durante o acompanhamento, terá a liberdade para mudar da ideia, caso desista da entrega.
                  </p>
              </Col>
              <Col style={homeRow1} md={6}>
              <p> Prometer ou entregar um bebê a terceiros mediante pagamento ou recompensa é crime, assim como registrar um bebê de outra pessoa como se fosse seu filho. Também é crime abandonar o bebê em locais públicos.
                  </p>
              </Col>
            </Row>

            <Row className="justify-content-md-start">
            </Row>

            <Row className="justify-content-md-center">
              <Col style={homeRow1} md={6}>
              <p> Se o bebê é entregue de forma ilegal, corre o risco de ser oferecido a uma família despreparada e não receber proteção, afeto e cuidados para se desenvolver. Além disso, o bebê pode ser retirado desta família pela Justiça e encaminhado para uma instituição de acolhimento (abrigo), onde aguardará para ser adotado de forma legal.
                  </p>
              </Col>
              <Col style={homeRow2} md={6}>
              <p>
                  Quando uma mulher entrega o bebê de forma legalizada, ele será entregue para uma família que foi avaliada e habilitada pela Vara da Infância e Juventude para dedicar cuidados adequados a uma criança. A entrega legal torna este processo mais rápido.
                </p>
              </Col>
            </Row>

            

               <Row className="justify-content-md-start">
              <Col style={homeRow2} md={12}>
                <p>
                  Profissionais da saúde, da assistência social, representantes religiosos e líderes comunitários devem fazer a imediata comunicação ao judiciário ao ter conhecimento de casos de mãe ou gestante interessada em entregar o bebê para adoção. A Lei nº 12.010 de 2009, art. 258-B prevê penalizações e pagamento de multas caso a lei não seja cumprida.
                  </p>
              </Col>
            </Row>

          </Col>

        </Row>


      </Container>

      <Row className="justify-content-md-center">

        <Col md={8} >

          <h4 style={{fontSize:'25px', color:"rgb(224, 89, 89)", marginTop:'15px'}}><span style={{borderBottom: '3px solid white'}}>É CRIME</span></h4>

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
              <Col style={homeRow6} md={12}>
              <p>
            Abandone o filho recém-nascido, podendo causar a morte
            da criança, sonegando-lhe, assim, o direito à vida,
            hipótese em que também responderá criminalmente;
                  </p>
              </Col>
            </Row>
            <Row className="justify-content-md-center">
              <Col style={homeRow6} md={12}>
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
              <Col style={homeRow6} md={12}>
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

    </Container>

  );
};

export default Home;



const homeRow1 = {
  borderLeft: "3px solid rgb(26, 164, 136)",
  marginTop:'10px',
  marginBottom:'10px'
  
}
const homeRow2 = {
  borderLeft: '3px solid rgb(119, 253, 224)',
  
}
const homeRow3 = {
  borderRight: '3px solid #ffe76d',
 
}
const homeRow4 = {
  borderTop: '3px solid #ffe76d',
  padding:'15px'
}

const homeRow5 = {
  borderLeft: '3px solid #ffe76d',
  borderBottom: 'px solid #ffe76d',
  padding:'15px'
 
}
const homeRow6 = {
  
  borderLeft: '5px solid rgb(224, 89, 89)',
  padding:'8px',
  color:'rgb(166,166,166)'
}
