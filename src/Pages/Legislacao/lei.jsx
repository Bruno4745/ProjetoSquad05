import { Jumbotron, Container, Accordion, Card } from "react-bootstrap";


import eca from './eca.png';


const Lei = () => {
  return (
    <div>
      <Jumbotron style={{backgroundColor: "#ffe76d"}}>
        <div class="Container">
          <h1> <strong>O que diz a legislação</strong> </h1>
          <br></br>
          <div class="row marcador align-items-center">
    <div class="col mx-auto text-center">
          <img class="ing-responsive"
           width="420"
           src={eca}
           alt="eca"></img>
         </div>
        </div>
        </div>
      </Jumbotron>
      
      <div>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0" >
                <h6 style={{color: "#952790"}} >
                  <strong>Constituição Federal </strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                      A Constituição Federal de 1988 garante, dentro dos princípios da dignidade da pessoa humana e da paternidade responsável, o direito ao planejamento familiar (CF, art. 226, § 7º).
                     
                     Por sua vez, a Lei nº 9.263, de 1996 (art. 3º), prevê que o planejamento familiar integra o conjunto de ações à mulher, ao homem ou ao casal.
                     
                     Nossa Constituição também estabelece que é dever da família, da sociedade e do Estado assegurar à criança, com prioridade absoluta, diversos direitos, dentre eles, o direito à vida e de ser colocada a salvo de toda forma de negligência, violência ou crueldade. (CF, art. 227).
                      </p>
                     
                      
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h6 style={{color: "#952790"}}>
                  <strong>Estatuto da Criança e do Adolescente</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                      O Estatuto da Criança e do Adolescente – ECA (Lei nº 8.969, de 1990) – Art. 7º – A criança e o adolescente têm direito a proteção à vida e à saúde, mediante a efetivação de políticas sociais públicas que permitam o nascimento e o desenvolvimento sadio e harmonioso, em condições dignas de existência.

§ 5º – A assistência referida no § 4º deste artigo deverá ser prestada também a gestantes e mães que manifestem interesse em entregar seus filhos para adoção, bem como a gestantes e mães que se encontrem em situação de privação de liberdade.
                      </p>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <h6 style={{color: "#952790"}}>
                  <strong>Entrega legal - Lei nº 13.509, de 2017</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li>
                    <p>
                    A recente Lei nº 13.509, de 2017 - que alterou e inovou o
                    ECA – trouxe importantes regras sobre o que denominamos
                    “Entrega Legal”, destacando-se as seguintes:
                  </p>
                  <p>
                    Art. 19-A – A gestante ou mãe que manifeste interesse em
                    entregar seu filho para adoção, antes ou logo após o
                    nascimento, será encaminhada à Justiça da Infância e da
                    Juventude.
                  </p>
                  <p>
                    § 1º – A gestante ou mãe será ouvida pela equipe
                    interprofissional da Justiça da Infância e da Juventude, que
                    apresentará relatório à autoridade judiciária, considerando
                    inclusive os eventuais efeitos do estado gestacional e
                    puerperal.
                  </p>
                  <p>
                    § 2º – De posse do relatório, a autoridade judiciária poderá
                    determinar o encaminhamento da gestante ou mãe, mediante sua
                    expressa concordância, à rede pública de saúde e assistência
                    social para atendimento especializado.
                  </p>
                  <p>
                    § 5º – Após o nascimento da criança, a vontade da mãe ou de
                    ambos os genitores, se houver pai registral ou pai indicado,
                    deve ser manifestada na audiência a que se refere o § 1º do
                    art. 166 desta Lei, garantido o sigilo sobre a entrega.
                  </p>
                  <p>
                    § 8º – Na hipótese de desistência pelos genitores -
                    manifestada em audiência ou perante a equipe
                    interprofissional - da entrega da criança após o nascimento,
                    a criança será mantida com os genitores, e será determinado
                    pela Justiça da Infância e da Juventude o acompanhamento
                    familiar pelo prazo de 180 (cento e oitenta) dias.
                  </p>
                  <p>
                    § 9º – É garantido à mãe o direito ao sigilo sobre o
                    nascimento, respeitado o disposto no art. 48 desta Lei.
                  </p>
                  <p>
                    Art – 166, § 3º – São garantidos a livre manifestação de
                    vontade dos detentores do poder familiar e o direito ao
                    sigilo das informações.
                  </p>
                  <p>
                    § 5º – O consentimento é retratável até a data da realização
                    da audiência especificada no § 1º deste artigo, e os pais
                    podem exercer o arrependimento no prazo de 10 (dez) dias,
                    contado da data de prolação da sentença de extinção do poder
                    familiar.
                  </p>
                  </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </Container>
      </div>

      <div className=" referencias mt-5">
        <Container>
          <h4>Referências</h4>
          <div>
            <p>
              <a
                href="http://www.neca.org.br/wp-content/uploads/cartilha%20-%20politica%20de%20atencao%20a%20gestante.pdf"
                target="_blank "
                rel="noreferrer"
              >
                  
                Informações sobre Adoção no Tribunal de Justiça de São Paulo
              </a>
            </p>
            <p>
            <p>
              <a
                href="http://www.adotar.tjsp.jus.br/Home/Contato"
                target="_blank "
                rel="noreferrer"
              >
                  
                Cartilha Política de Atenção à Gestante
              </a>
            </p>    
              <a
                href="http://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
                target="_blank"
                rel="noreferrer"
              >
                Estatuto da Criança e do Adolescente - LEI 8.069/90
              </a>
            </p>
            <p>
              <a href="https://www.in.gov.br/materia/-/asset_publisher/Kujrw0TZC2Mb/content/id/4230256/do1e-2018-02-23-lei-n-13-509-de-22-de-novembro-de-2017-4230252">
                Dispõe sobre adoção -LEI 13.509/17
              </a>
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Lei;
