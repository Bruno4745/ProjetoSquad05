import React from "react";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import BannerProfissionais from "../../Components/Banner/BannerProfissionais";

const InfoProfissional = () => {
  return (
    <>
      <Container>
        <BannerProfissionais />
      </Container>

      <Jumbotron fluid id="jumbotron">
        <Container>
         
          <br />
          <p style={{ fontSize: "20px" }}>
            Aqui você vai encontrar orietações sobre a{" "}
            <strong>entrega voluntária</strong> aos profissionais independente
            da ocupação na rede de atendimento.
          </p>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12}>
            <Row>
              <Col style={BorderProfs} md={12}>
                <Row className="justify-content-center">
                  <p>
                    {" "}
                    Algo fundamental para o Programa é que todos os
                    profissionais, independentemente do local que ocupam na rede
                    de atendimento, assumam seu papel no atendimento à gestante,
                    com competência técnica, conhecimento teórico e compromisso
                    ético para realizar as reflexões, orientações e
                    encaminhamentos necessários.
                  </p>
                </Row>
                <p>
                  O primeiro elemento que deve nortear a comunidade e os
                  profissionais é o “olhar sensível” para a percepção da
                  realidade. Caso contrário, pode ocorrer uma longa peregrinação
                  por mainersos serviços, sem que seja dada a devida atenção à
                  dúvida, desejo ou sofrimento da mulher. A sensação é de
                  invisibilidade.
                </p>
                <p>
                  O não julgamento é essencial para a criação de um vínculo de
                  confiança entre a mulher e a rede.
                </p>
                <p>
                  Os profissionais que recebem a informação por parte da
                  gestante, sejam eles da Assistência Social (CRAS/CREAS) ou
                  Saúde (UBS/UPAS), considerando serem essas as políticas mais
                  acessadas pelas mulheres, devem comunicar, imediatamente, à
                  vara da infância e juventude.
                </p>
                <p>
                  Os encaminhamentos não caracterizam transferência de
                  responsabilidades, pelo contrário, o trabalho deverá se
                  realizar, paralelamente, entre os serviços, conforme área de
                  intervenção.
                </p>
                <p>
                  Muitos profissionais deixam de encaminhar ao Programa Entrega
                  Legal por perceberem que as mulheres estão muito confusas,
                  ambivalentes e inseguras. Essa dúvida da gestante é
                  perfeitamente normal e compreensível. Vale ressaltar que não é
                  necessária a convicção da mulher quanto à decisão da entrega
                  do bebê para adoção para que seja encaminhada ao Programa
                  Entrega Legal. Contudo, a Lei exige o seu encaminhamento como
                  imediato, ou seja, que a gestante possa ser atendida pelo
                  Programa o mais cedo possível, após manifestar a intenção pela
                  entrega.
                </p>
                <p>
                  É importante ressaltar que, quanto mais precocemente a
                  gestante é encaminhada para o Programa, maiores serão suas
                  oportunidades para aprofundamento das reflexões sobre a tomada
                  de uma decisão consciente e refletida o encaminhamento deve
                  ser feito diretamente e com celeridade à vara da infância e
                  juventude, do local de moradia da gestante.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4 ">
          <Col md={12}>
            <h3 style={{ color: "rgb(26, 164, 136)" }}>
              <strong>
                Veja os pontos aos quais todos os profissionais envolvidos devem
                ficar atentos:{" "}
              </strong>
            </h3>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12} style={{ color:"rgb(166, 166, 166)", fontSize: "19px" }}>
            <ul>
              <li>
                Uma postura não julgadora e não preconceituosa de todos os
                agentes que vierem a atender a mulher;{" "}
              </li>
              <li>
                Conhecimento dos diversos serviços que podem ser envolvidos no
                atendimento;{" "}
              </li>
              <li>
                Articulação entre esses serviços para garantir rapidez no
                atendimento, visando não prejudicar a criança, além de canais de
                comunicação entre os diversos setores{" "}
              </li>
              <li>
                Conhecimento sobre as consequências da decisão de entrega da
                criança e das diferenças entre entrega e abandono;{" "}
              </li>
              <li>
                Respeito aos direitos da mulher e da criança, bem como de
                terceiros envolvidos, sobretudo aos do suposto genitor e de
                membros da família extensa.
              </li>
            </ul>
            <Row className=" justify-content-md-center ">
              <Col md={12}>
                <p>
                  <strong>
                    A entrega do recém nascido à adoção não é crime, ao
                    contrário, é direito.
                  </strong>{" "}
                  Assim, todos os profissionais qualificados ao atendimento
                  dessa demanda devem combater atitudes de criminalização e
                  colaborar para a construção de uma nova cultura, em que a
                  mulher seja vista como sujeito de direitos e sujeito da
                  própria história.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Row className="justify-content-md-center mt-3">
        <Col md={12}>
          <Row className=" justify-content-md-center">
            <Col md={8} style={Row10Profs}>
              <h3 style={{ color:"rgb(224, 89, 89)"}}>
                <strong>Atenção</strong>
              </h3>
              <p style={{ color:"rgb(166, 166, 166)", borderLeft: "5px solid rgb(224, 89, 89)", padding:"15px" }}>
                
                  Para garantir o direito da gestante de ser atendida
                  prontamente pela Vara da Infância e Juventude, o Estatuto da
                  Criança e do Adolescente prevê uma multa de R$ 1.000,00 a R$
                  3.000,00 para o médico, enfermeiro, dirigente de
                  estabelecimento de saúde, funcionário de programa oficial ou
                  comunitário destinado à garantia do direito à convivência
                  familiar que deixar de, imediatamente, encaminhar à autoridade
                  judiciária caso de que tenha conhecimento, envolvendo mãe ou
                  gestante interessada em entregar seu filho para adoção. (ECA,
                  art. 258-B).
                
              </p>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={12} md={12} lg={10} style={Border2Profs}>
          <h4 style={{ color: "rgb(149, 39, 144)" }}>
            <strong>Aos profissionais da Vara da Infância e Juventude</strong>
          </h4>
          <p>
            {" "}
            Já os profissionais que atenderão a gestante na vara da infância e
            juventude (Psicólogo e Assistente Social) não devem exercer o papel
            de convencê-la a entregar o filho em adoção, nem de persuadi-la a
            ficar com a criança.
          </p>

          <h4 style={{ color: "rgb(255, 219, 40)", textAlign: "Center" }}>
            <strong>Aos profissionais da Saúde</strong>
          </h4>
          <p >
            {" "}
            É importante que o Judiciário comunique às maternidades de
            referência para que a equipe multiprofissional se prepare para o
            acolhimento da gestante, principalmente com o objetivo de respeitar
            o seu desejo de amamentar ou não, de conhecer ou não o bebê, após o
            nascimento, bem como o tipo de parto mais adequado ao caso, conforme
            a condição física e emocional de cada mulher.
          </p>

          <h4 style={{ color: "rgb(26, 164, 136)", textAlign: "right" }}>
            <strong>
              Aos profissionais da Assistência Social e Psicólogos
            </strong>
          </h4>
          <p style= {Border3Profs}>
            {" "}
            Um apoio importante para a gestante nesse período é seu
            acompanhamento psicológico na rede de atendimento, o que ocorrerá
            apenas se ela considerar necessário e aceitar voluntariamente. Por
            sua vez, os serviços de saúde precisam estar organizados para
            acolhimento dessa demanda. O apoio psicológico contribui de forma
            efetiva para o processo decisório da mulher. O assistente social ou
            o psicólogo que inicia os atendimentos da gestante ou puérpera
            apresentará ao juiz da infância e juventude pelo menos dois
            relatórios, um no início e outro no final do trabalho de
            acompanhamento da mulher que foi inserida ao Programa de Entrega
            Legal. Para organização de um trabalho integrado e qualificado, é
            importante a articulação com os demais profissionais da rede
            socioassistencial envolvidos no atendimento, conforme
            particularidades de cada área de atuação.
          </p>
        </Col>
      </Row>
    </>
  );
};

export default InfoProfissional;

const BorderProfs = {
  borderRight: "3px solid #ffe76d",
  color:"rgb(166,166,166)",
  };

const Border2Profs = {
  color:"rgb(166,166,166)",
  borderlext: "3px solid #ffe76d",
 };

const Row10Profs = {
  color: "rgb(166,166,166)",
};

const Border3Profs = {
  borderRight: "3px solid rgb(26, 164, 136)",
  color:"rgb(166,166,166)",
  };