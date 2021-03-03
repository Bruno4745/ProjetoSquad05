import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import "../jumbotron.css";
import about from "./img/roda.jpg";
import roda from "./img/livro.jpg";


 const Historia = () => {
  return (
    <Container style={{ color: "#952790" }}>
      <Row className="mt-3">
        <Col md={12}>
          <h1>Origem</h1>
          
        </Col>
      </Row>

      <Row className="mt-2">
        <Col xs={12} sm={12} md={9} lg={6}>
          <img src={about} style={{ width: "60%" }} alt="" />
        </Col>
        <Col xs={12} sm={12} md={9} lg={6}>
          <Row style={historiaFilhosdaRoda}>
            <h3 style={{ color: "rgb(2, 155, 124)" }}>Filhos da Roda</h3>
            <p>
              A roda dos expostos sempre esteve ligada às instituições caridosas
              (abadias, mosteiros e irmandades beneficentes). Nela eram deixadas
              crianças cujos pais por alguma razão não as podiam criar.
            </p>
          </Row>

          <Row style={historiaFilhosdaRoda}>
            <p>
              Formada por uma caixa dupla de formato cilíndrico, a roda foi
              adaptada no muro das instituições caridosas. Com a janela aberta
              para o lado externo, um espaço dentro da caixa recebia a criança
              após rodar o cilindro para o interior dos muros, desaparecendo
              assim a criança aos olhos externos; dentro da edificação a criança
              era recolhida, cuidada e criada até se fazer independente.
            </p>
          </Row>
          <Row style={historiaFilhosdaRoda}>
            <p>
              As rodas dos expostos das Misericórdias sempre existiram, e a
              primeira foi fundada em Portugal em 1498. A roda da Irmandade de
              São Paulo tem idade de uso a partir de 16 de novembro de 1876,
              quando Ariana da Silva Albuquerque foi deixada no meio da noite.
              Documentos porém atestam sua existência desde 02 de julho de 1825.
            </p>
          </Row>
          <Row style={historiaFilhosdaRoda}>
            <p>
              O término do uso da roda da Santa Casa de Misericórdia de São
              Paulo se dá em 20 de dezembro de 1950, quando Maria Assunta foi
              recebida e registrada em um livro com o número de 4.580.
            </p>
          </Row>
        </Col>
      </Row>

      <Row className="mt-2" >
        <Col xs={12} sm={12} md={9} lg={6}>
          <Row >
            <h3 style={{color: "rgb(2, 155, 124)", textAlign: "right"  }}>Contexto Social</h3>

            <li style={historiaContextoSocial}>
              (...) Num cenário de generalizada pobreza como este, em que o
              casamento formalmente constituído era raridade, as mães que
              entregavam seus filhos à roda eram frequentemente mulheres pobres,
              solteiras ou viúvas, abandonadas por seus amásios, esposas de
              maridos ausentes que procuravam em outras paragens o trabalho que
              não encontravam na cidade. Sobrevivendo parcamente de suas
              próprias agências e do trabalho realizado por algumas poucas
              escravas, desprovidas de recursos para criar seus filhos, estas
              mulheres viam-se forçadas a entregá-los aos cuidados da caridade
              privada. As mães dos pequenos abandonados eram também mulheres
              escravas que, na esperança de livrar seus filhos da escravização,
              depositavam-nos na roda ainda recém-nascidos. Por vezes, os
              próprios senhores ou senhoras de escravos entregavam os menores à
              caridade, procurando livrar-se dos encargos de sustentar os
              cativos em idade não produtiva, reclamando-os mais tarde, quando
              poderiam já começar a prestar serviços. (...)
            </li>
          </Row>
        </Col>

        <Col xs={12} sm={12} md={9} lg={6}>
          <img
            className="mt-5"
            src={roda}
            alt=""
            style={{ width: "110%", height: "80%" }}
          />
        </Col>
      </Row>

      <Row className="justify-content-md-center mt-5">
        <Col md={12} style={{color: "rgb(166,166,166)"}} >
          <li>
            (...) Os pequenos abandonados, recolhidos ao Hospital de Caridade,
            eram então encaminhados a amas de leite e, posteriormente, a amas
            secas, que os criariam até que pudessem ser encaminhados a um
            “destino útil” – o que, no século XIX, significava ser entregue em
            tenra idade ao trabalho, frequentemente em casas de família. Deste
            modo, uma íntima relação desenhou-se, desde o princípio, entre a
            caridade da Roda dos Expostos e a suplementação de mão de obra
            infantil na cidade. Entendia-se, segundo os padrões de moralidade da
            época - para os quais a pobreza afigurava-se mais como falta de
            caráter e empenho do que como problema social - que como filhos das
            classes pobres da cidade, as crianças devessem ser educadas como
            trabalhadores morigerados, modo a não repetir as falhas de seus pais
            e a evitar que se tornassem vagabundos, sujeitos desviantes e
            nocivos à sociedade. Em 1896, foi criado o Asylo Sampaio Vianna,
            internato instalado numa chácara do bairro do Pacaembu para onde
            eram remetidos os expostos. Ao longo do século XX, conforme se
            alteravam os estatutos e instituições públicas dedicados aos
            cuidados e enquadramento social dos menores de idade, o Asylo foi
            convertido em Educandário Sampaio Vianna e, mais tarde, em unidade
            da FEBEM (Fundação Estadual do Bem-Estar do Menor), revelando-se
            simbolicamente os vínculos atados desde o Império entre assistência
            social, criminalização e disciplinarização da infância e juventude
            pobres. (...)
          </li>
        </Col>
      </Row>

      <br />
      <br />

      <h4>
        <strong style={{color:"rgb(2,155,124)"}}>Referências</strong>
      </h4>
      <div>
        <a
          style={{ color: "rgb(2,155,124)", fontSize: "16px" }}
          href="https://www.santacasasp.org.br/portal/site/quemsomos/museu/pub/10956/a-roda-dos-expostos-1825-1961"
          target="_blank "
          rel="noreferrer"
        >
          Santa Casa de Misericórdia de São Paulo
        </a>
      </div>
    </Container>
  );
}


export default Historia

const historiaFilhosdaRoda = {
  borderRight: "3px solid rgb(2, 155, 124)",
  color:"rgb(166,166,166)"
};

const historiaContextoSocial = {
  borderLeft: "3px solid rgb(2, 155, 124)",
  margin: "10px 0",
  color:"rgb(166,166,166)",
};
