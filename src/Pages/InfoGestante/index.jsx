import React from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import BannerGestante from "../../Components/Banner/BannerGestanteMae";
import ModalGestante from "../../Components/Modal";
import Gestante from "./img/gestante.jpg";

const GestanteMae = () => {
  return (
    <>
      <Container>
        <BannerGestante />
      </Container>

      <Jumbotron fluid id="jumbotron">
        <Container>
        
          <br />
          <p style={{ fontSize: "20px" }}>
            Aqui, você vai encontrar orientações para realização da entrega
            voluntária da criança para adoção.
          </p>
        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col xs={12} sm={12} md={9} lg={6} className="mb-4">
            <img src={Gestante} style={{ width: "50%", margin: "0 0 0 25%"}} alt="gestante" />
          </Col>
          <Col xs={12} sm={12} md={9} lg={6}>
            <Row style={RowsGestante} className="float-end">
              <h4 style={{ color: "#952790" }}>
                Onde Buscar Atendimento{" "}
              </h4>
              <p style={{ color: "" }}>
                Procurar um profissional nas rede de atendimento , nas áreas da
                assistência social, saúde, Conselho Tutelar, Ministério Público,
                Defensoria Pública, Poder Judiciário e demais instituições,
                conforme o que for mais próximo.{" "}
              </p>
            </Row>

            <Row style={RowsGestante2} className="float-end">
              <h4 style={{ color: "rgb(26, 164, 136)"}}>
                {" "}
                Como é feito o Atendimento
              </h4>
              <p>
                O atendimento é feito na Vara da Infância e Juventude, a
                gestante ou mãe do bebê ou criança será atendida por psicólogos
                e assistentes sociais, que analisarão com cautela a situação.
              </p>
              <p>
                {" "}
                Esse atendimento será pautado em um processo reflexivo para que
                a gestante possa construir uma decisão segura, seja para ficar
                com o filho ou realizar a entrega.
              </p>
            </Row>
          </Col>

          <Col md={12} style={{}}>
            <Row style={RowsGestante1}>
              <h4 style={{ color: "rgb(218, 112, 214)", textAlign: "right" }}>
                {" "}
                Direitos da Gestante/Mãe
              </h4>
              <p>
                A gestante ou mãe de recém-nascido, encontra-se o direito ao
                sigilo sobre a entrega (ECA, art. 19-A, § 5º), sobre o
                nascimento (ECA- art. 19-A, § 9º) e sobre as informações
                prestadas pela genitora e pai ou suposto pai a respeito da
                entrega do filho em adoção (ECA, art. 166, § 3º).
              </p>
              <p>
                Ao planejamento familiar, com amplo acesso à rede pública de
                saúde e assistência social;
              </p>
              <p>
                De receber atendimento humanizado e sem preconceitos ou
                julgamentos, inclusive e especialmente quando manifesta dúvidas
                ou já tem a decisão formada sobre a vontade de não exercer a
                maternidade;
              </p>
              <p>
                De ser prontamente encaminhada à vara da infância e juventude,
                tão logo manifeste o desejo de entrega voluntária do filho em
                adoção;
              </p>
              <p>
                De ser ouvida e receber todas as informações necessárias para
                que sua decisão sobre a entrega do filho seja madura e fruto de
                ampla reflexão (durante ou após o parto);
              </p>
              <p>
                De recusar atendimento pela rede pública de saúde e assistência
                social;
              </p>
              <p>De indicar ou se recusar a indicar o genitor da criança;</p>
              <p>
                De indicar ou se recusar a indicar pessoa da família extensa que
                tenha interesse e condições de, sob guarda judicial, receber o
                filho e criá-lo;
              </p>
              <p>
                De desistir (até antes da audiência realizada após o nascimento
                do filho) e até mesmo retratar-se (em até 10 dias após a
                audiência já referida) a respeito da decisão inicial de entregar
                o filho em adoção.
              </p>
            </Row>
          </Col>
        </Row>

        <Row
          className="mt-8 justify-content-md-center"
          
        >
          <Col md={8} style={textGrey}>
            <ModalGestante />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GestanteMae;

const RowsGestante = {
  
  color:"rgb(166,166,166)"
};
const RowsGestante1 = {
  borderRight: "3px solid rgb(218, 112, 214)",
  color:"rgb(166,166,166)"
};
const RowsGestante2 = {
  borderLeft: "3px solid rgb(26, 164, 136)",
  color:"rgb(166,166,166)"
};
const textGrey = {
  color:"rgb(166,166,166)"
}
