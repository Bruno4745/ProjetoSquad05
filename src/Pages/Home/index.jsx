import React from 'react';
import { Jumbotron, Container, Card, Row, Col } from "react-bootstrap";
import Carousel from '../../Components/Carousel/Carousel';
import CarouselComCards from '../../Components/Carousel/CarouselComCards';

const Home = () => {
  return (
    <Container fluid>

          <Carousel/>
   
      <Container className="gambiarraNaHome">

        <Row>
          <Col md={12}>
            <Jumbotron fluid id="jumbotron">

              <center>
                <h2> É SOBRE SALVAR VIDAS E ENTREGAR RECOMEÇOS E ESPERANÇAS </h2>
              </center>
              <br></br>
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


        <Row>
          <Col md={4}>

            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>Problemática & Projeto de Solução</Card.Title>
                <Card.Text>
                  No Brasil, não é raro noticiários divulgando casos de abandono de
                  bebês (em latas de lixos, matagais, rios, entre outros),
                  negociações financeiras e ou entrega ilegal de bebês,
                  infanticídios, abortos clandestinos (com risco de morte para a
              mulher). Diante deste cenário a Squad 5 desenvolveu o projeto{" "}
                  <strong>“Recomeçar”</strong> que tem como propósito trazer
              melhorias tecnológicas ao processo de Entrega Voluntária para
              Adoção (prevista em lei), além de disseminar e propagar campanhas
              de marketing com o intuito de combater o preconceito e o
              julgamento deste assunto tão importante.
            </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>SOBRE A ENTREGA VOLUNTÁRIA</Card.Title>
                <Card.Text>
                  <p>
                    O acolhimento profissional à gestante que indica a intenção
                    de entregar o filho em adoção constitui o primeiro passo
                    para orientações importantes ao exercício da maternidade.
                  </p>
                  <p>
                    A Entrega Legal é o único tema previsto em lei, cuja porta
                    de entrada deixa de ser o conselho tutelar e passa a ser a
                    vara da infância e juventude, com atendimento prioritário,
                    se possível, de forma imediata pelo assistente social ou
                    psicólogo da comarca. Por sua natureza, a Entrega Legal
                    exige um trabalho célere, prioritário e articulado entre os
                    serviços, especialmente vinculados à saúde, assistência
                    social e Judiciário.
                  </p>
                  <p>
                    A entrega do recém nascido à adoção não é crime, ao
                    contrário, é direito. Assim, todos os profissionais
                    qualificados ao atendimento dessa demanda devem combater
                    atitudes de criminalização e colaborar para a construção de
                    uma nova cultura, em que a mulher seja vista como sujeito de
                    direitos e sujeito da própria história.
                  </p>
                  <p>
                    Consequentemente, contribui para a redução do número de
                    abandonos e morte de bebês, o acompanhamento da gestante por
                    profissionais competentes, a celeridade do acolhimento
                    familiar/institucional de recém-nascidos, numa fase peculiar
                    do desenvolvimento.
                  </p>
                  <p>
                    A falta de informação pode acarrear infanticidio, aborto
                    clandestinos e negociaçoes financeiras, ou a entrega ilegal.
                    Além de partos de risco sem a assistência adequada, temendo
                    a criminalização, julgamento e condenação.
                  </p>
                  <p>
                    A falta de acolhimento e orientação, somada a falta de
                    disponibilidade emocional para exercer a maternidade,
                    futuramente, podem gerar denúncias graves de maus tratos ao
                    conselho tutelar.
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="" />
              <Card.Body>
                <Card.Title>É CRIME!!</Card.Title>
                <Card.Text>

                  <p>
                  Pratique aborto clandestino e, portanto, ilegal,
                        correndo sérios riscos de vida e, inclusive, de
                        responder a processo criminal;
                  </p>
                  <p>
                  Abandone o filho recém-nascido, podendo causar a morte
                        da criança, sonegando-lhe, assim, o direito à vida,
                        hipótese em que também responderá criminalmente;
                  </p>
                  <p>
                  Entregue (de forma gratuita ou negociada) o filho
                        recém-nascido a pessoas estranhas, sem laços de
                        parentesco, geralmente despreparadas, sem projeto de
                        adoção e que, por vezes, escondem da criança a própria
                        história. Esse procedimento também pode configurar
                        crime;
                  </p>
                  <p>
                  Contribua para que o sistema legal de adoção seja
                        totalmente desrespeitado, burlando-se a ordem
                        cronológica do Sistema Nacional de Adoção e culminando
                        com as denominadas “adoções à brasileira”, “adoção
                        direta”, “adoção intuito personae” ou “adoção dirigida”.
                  </p>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        <Row>
          <Col md={12}>
            <Jumbotron fluid id="jumbotron">

              <center>
                <CarouselComCards/>
              </center>


            </Jumbotron>
          </Col>
        </Row>

      </Container>
    </Container>
  );
};

export default Home;