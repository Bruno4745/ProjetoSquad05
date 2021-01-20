import React from 'react';
import { Jumbotron, Container, Card} from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';

import a1 from './a1.jpg'
import a2 from './a2.jpg'
import a3 from './a3.jpg'
import a4 from './a4.jpg'

const Home = () => {
    return (
      <div>
        <div className="carrossel">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={a4}
                width="50"
                alt="Third slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src={a1}
                width="50"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={a2}
                width="50"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={a3}
                width="50"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        <Jumbotron fluid>
          <Container>
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

            <p></p>
          </Container>
        </Jumbotron>

        <Card style={{ width: "70rem" }}>
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

        <main className="my-4">
          <div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  SOBRE A ENTREGA VOLUNTÁRIA
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
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
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                   O QUE DIZ A LESGILAÇÃO?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  <p>
                    A Constituição Federal de 1988 garante, dentro dos
                    princípios da dignidade da pessoa humana e da paternidade
                    responsável, o direito ao planejamento familiar (CF, art.
                    226, § 7º).
                  </p>
                  <p>
                    Por sua vez, a Lei nº 9.263, de 1996 (art. 3º), prevê que o
                    planejamento familiar integra o conjunto de ações à mulher,
                    ao homem ou ao casal.
                  </p>
                  <p>
                    Nossa Constituição também estabelece que é dever da família,
                    da sociedade e do Estado assegurar à criança, com prioridade
                    absoluta, diversos direitos, dentre eles, o direito à vida e
                    de ser colocada a salvo de toda forma de negligência,
                    violência ou crueldade. (CF, art. 227).
                  </p>
                  <p>
                    O Estatuto da Criança e do Adolescente – ECA (Lei nº 8.969,
                    de 1990) – Art. 7º – A criança e o adolescente têm direito a
                    proteção à vida e à saúde, mediante a efetivação de
                    políticas sociais públicas que permitam o nascimento e o
                    desenvolvimento sadio e harmonioso, em condições dignas de
                    existência.
                  </p>
                  <p>
                    § 5º – A assistência referida no § 4º deste artigo deverá
                    ser prestada também a gestantes e mães que manifestem
                    interesse em entregar seus filhos para adoção, bem como a
                    gestantes e mães que se encontrem em situação de privação de
                    liberdade.
                  </p>
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
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
};

export default Home;