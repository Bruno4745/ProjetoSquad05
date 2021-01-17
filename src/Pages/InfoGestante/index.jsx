import React from "react";
import { Jumbotron, Container, Accordion, Card } from "react-bootstrap";

const GestanteMae = () => {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1> Informações à Gestante/Mãe </h1>
          <br></br>
          <p>
            Aqui, você vai encontrar orientações para realização da entrega
            voluntária da criança para adoção.
          </p>

          <p></p>
        </Container>
      </Jumbotron>
      <div>
        <Container>
          <Accordion defaultActiveKey="0">
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="0">
                <h6>
                  <strong>Onde Buscar Atendimento </strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                        Procurar um profissional nas rede de atendimento , nas
                        áreas da assistência social, saúde, Conselho Tutelar,
                        Ministério Público, Defensoria Pública, Poder Judiciário
                        e demais instituições, conforme o que for mais próximo.
                      </p>
                      <footer className="blockquote-footer mb-3">
                        <small className="text-muted">
                          <p>
                            <strong>
                              Art. 19-A – A gestante ou mãe que manifeste
                              interesse em entregar seu filho para adoção, antes
                              ou logo após o nascimento, será encaminhada à
                              Justiça da Infância e da Juventude.
                            </strong>
                          </p>
                          <cite title="Source Title">
                            <a
                              href="https://www.planalto.gov.br/ccivil_03/leis/L8069.htm"
                              target="_blank"
                            >
                              <br></br>
                              LEI Nº 8.069, DE 13 DE JULHO DE 1990.
                            </a>
                          </cite>
                        </small>
                      </footer>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="1">
                <h6>
                  <strong>Como é feito o atendimento</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                        O atendimento é feito na Vara da Infância e Juventude, a
                        gestante ou mãe do bebê ou criança será atendida por
                        psicólogos e assistentes sociais, que analisarão com
                        cautela a situação.
                      </p>
                      <li>
                        <p>
                          Esse atendimento será pautado em um processo reflexivo
                          para que a gestante possa construir uma decisão
                          segura, seja para ficar com o filho ou realizar a
                          entrega.
                        </p>
                      </li>
                      <li>
                        <p>
                          Se a decisão for pela entrega, após o nascimento ,
                          serão realizados os encaminhamentos legais.
                        </p>
                      </li>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="2">
                <h6>
                  <strong>Direitos da Gestante/Mae</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                        A gestante ou mãe de recém-nascido, encontra-se o
                        direito ao sigilo sobre a entrega (ECA, art. 19-A, §
                        5º), sobre o nascimento (ECA- art. 19-A, § 9º) e sobre
                        as informações prestadas pela genitora e pai ou suposto
                        pai a respeito da entrega do filho em adoção (ECA, art.
                        166, § 3º).
                      </p>
                    </li>
                    <li>
                      <p>
                        Ao planejamento familiar, com amplo acesso à rede
                        pública de saúde e assistência social;
                      </p>
                    </li>
                    <li>
                      <p>
                        De receber atendimento humanizado e sem preconceitos ou
                        julgamentos, inclusive e especialmente quando manifesta
                        dúvidas ou já tem a decisão formada sobre a vontade de
                        não exercer a maternidade;
                      </p>
                    </li>
                    <li>
                      <p>
                        De ser prontamente encaminhada à vara da infância e
                        juventude, tão logo manifeste o desejo de entrega
                        voluntária do filho em adoção;
                      </p>
                    </li>
                    <li>
                      <p>
                        De ser ouvida e receber todas as informações necessárias
                        para que sua decisão sobre a entrega do filho seja
                        madura e fruto de ampla reflexão (durante ou após o
                        parto);
                      </p>
                    </li>
                    <li>
                      <p>
                        De recusar atendimento pela rede pública de saúde e
                        assistência social;
                      </p>
                    </li>
                    <li>
                      <p>
                        De indicar ou se recusar a indicar o genitor da criança;
                      </p>
                    </li>
                    <li>
                      <p>
                        De indicar ou se recusar a indicar pessoa da família
                        extensa que tenha interesse e condições de, sob guarda
                        judicial, receber o filho e criá-lo;
                      </p>
                    </li>
                    <li>
                      <p>
                        De desistir (até antes da audiência realizada após o
                        nascimento do filho) e até mesmo retratar-se (em até 10
                        dias após a audiência já referida) a respeito da decisão
                        inicial de entregar o filho em adoção.
                      </p>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="3">
                <h6>
                  <strong>É Crime!</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  <ul>
                    <li>
                      <p>
                        Pratique aborto clandestino e, portanto, ilegal,
                        correndo sérios riscos de vida e, inclusive, de
                        responder a processo criminal;
                      </p>
                    </li>
                    <li>
                      <p>
                        Abandone o filho recém-nascido, podendo causar a morte
                        da criança, sonegando-lhe, assim, o direito à vida,
                        hipótese em que também responderá criminalmente;
                      </p>
                    </li>
                    <li>
                      <p>
                        Entregue (de forma gratuita ou negociada) o filho
                        recém-nascido a pessoas estranhas, sem laços de
                        parentesco, geralmente despreparadas, sem projeto de
                        adoção e que, por vezes, escondem da criança a própria
                        história. Esse procedimento também pode configurar
                        crime;
                      </p>
                    </li>
                    <li>
                      <p>
                        Contribua para que o sistema legal de adoção seja
                        totalmente desrespeitado, burlando-se a ordem
                        cronológica do Sistema Nacional de Adoção e culminando
                        com as denominadas “adoções à brasileira”, “adoção
                        direta”, “adoção intuito personae” ou “adoção dirigida”.
                      </p>
                    </li>
                  </ul>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Accordion.Toggle as={Card.Header} eventKey="4">
                <h6>
                  <strong>E Mais...</strong>
                </h6>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <h6>
                    Algumas orientações são relevantes ao processo decisório da
                    gestante, como:
                  </h6>
                  <ul>
                    <li>
                      <p>
                        O direito da criança em permanecer em sua família de
                        origem e, na impossibilidade, em sua família extensa;
                      </p>
                    </li>
                    <li>
                      <p>
                        Da total liberdade e voluntariedade para a tomada de
                        decisão; da irrevogabilidade da adoção;
                      </p>
                    </li>
                    <li>
                      <p>
                        Da possibilidade de opção pelo sigilo quanto ao
                        nascimento e a entrega da criança; ao direito de o filho
                        buscar sua origem;
                      </p>
                    </li>
                    <li>
                      <p> Participação em audiência após alta hospitalar;</p>
                    </li>
                    <li>
                      <p>
                        O direito de desistência da entrega para adoção e seus
                        prazos; assim como o direito de receber assistência
                        integral por meio dos serviços presentes na rede de
                        atendimento. Se for o caso, deverá fazer menção à
                        recusa, pela gestante, de acompanhamento assistencial
                        e/ou de saúde pela rede local de atendimento
                      </p>
                    </li>
                    <li>
                      <p>
                        Se a gestante decide, após o nascimento do bebê,
                        permanecer com o filho ou indicar familiares, o recém
                        nascido permanecerá com a genitora ou sua família
                        extensa e deverão receber apoio por meio dos serviços
                        socioassistenciais, com acompanhamento previsto em lei
                        de pelo menos 180 dias.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ressaltamos que a gestante/genitora tem o direito de
                        entregar o filho para adoção, porém, não poderá indicar
                        a pessoa que o receberá, a não ser que a entrega seja
                        para o próprio genitor ou família extensa.
                      </p>
                    </li>
                    <li>
                      <p>
                        Há ainda a possibilidade de, nas comarcas onde existe o
                        serviço de acolhimento familiar devidamente implantado,
                        o juiz, buscando prevenir qualquer risco para a criança
                        e adotantes (e inclusive inseguranças por parte destes),
                        encaminhar o bebê para família acolhedora, onde, em
                        regra, ficará por menos de 30 dias, até que sua situação
                        jurídica seja definida totalmente. Nesse período, o bebê
                        permanecerá em família acolhedora devidamente preparada
                        para acolhê-lo, com estrutura para oferecer atenção
                        necessária durante o primeiro mês de vida, algo tão
                        importante na primeira infância.
                      </p>
                    </li>
                    <li>
                      <p>
                        Caso o suposto pai ou integrante da família extensa ou
                        ampliada tenham conhecimento da gravidez pela própria
                        gestante ou por terceiro – que não tenha a obrigação
                        legal de zelar pelo sigilo solicitado pela gestante –,
                        não estaremos diante de quebra do sigilo dentro do
                        sistema de garantia de direitos da gestante e da
                        infância e juventude.
                        <br></br>
                        Nesse caso, nada impede que o suposto pai e familiares
                        procurem o sistema de Justiça, situação em que serão
                        incluídos nos acompanhamentos realizados. Vale lembrar
                        que a genitora também tem direito de não indicar ou
                        apontar quem seria o suposto genitor da criança. Esse
                        direito também deve ser respeitado por todo o sistema de
                        atendimento à gestante.
                      </p>
                    </li>
                    <li>
                      <p>
                        Ao tratar da busca pela família extensa, o Estatuto
                        remete ao art. 25, que não só a define pelo laço de
                        consanguinidade, mas também exige que o parente próximo
                        tenha vínculos de afinidade e afetividade <br></br>
                        Conclui-se, então, que a busca pela família extensa, nos
                        casos de procedimento de Entrega Legal à adoção,
                        ocorrerá, somente, quando a gestante/genitora renunciar
                        seu direito ao sigilo.<br></br>
                        Vale lembrar que o prazo máximo definido em lei para a
                        busca de família extensa é de 90 dias.<br></br>
                        Por fim, a Entrega Legal e consciente do filho para
                        adoção terá como consequência a homologação pela Justiça
                        dessa vontade e não a decretação da perda do poder
                        familiar, esta sim, considerada uma punição aos
                        genitores por não exercerem a maternidade/ paternidade
                        responsável.
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
          <h4>Referencias</h4>
          <div>
            <p>
              <a
                href="http://www.neca.org.br/wp-content/uploads/cartilha%20-%20politica%20de%20atencao%20a%20gestante.pdf"
                target="_blank"
              >
                Cartilha Política de Atenção à Gestante
              </a>
            </p>
            <p>
              <a
                href="http://www.planalto.gov.br/ccivil_03/leis/l8069.htm"
                target="_blank"
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

export default GestanteMae;
