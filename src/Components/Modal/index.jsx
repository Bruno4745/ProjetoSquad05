import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";


const ModalGestante = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <>
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Row className="mx-1">
            <h2 style={{ color: "#952790" }}> <strong>Saiba Mais</strong></h2>
            <p>
              Clicando no botão abaixo
            </p>
            <button className="btn-purple mb-4" onClick={() => setShow(true)}>
              Clique Aqui
            </button>
          </Row>
        </Col>

      </Row>
      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title
            style={{ color: "#9f3c9a" }}
            id="example-modal-sizes-title-lg"
          >
            <strong>Saiba Mais</strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <ul  style={{color:"rgb(71,74,81)"}}>
            <li>
              <p>
                O direito da criança em permanecer em sua família de origem e,
                na impossibilidade, em sua família extensa;
              </p>
            </li>
            <li>
              <p>
                Da total liberdade e voluntariedade para a tomada de decisão; da
                irrevogabilidade da adoção;
              </p>
            </li>
            <li>
              <p>
                Da possibilidade de opção pelo sigilo quanto ao nascimento e a
                entrega da criança; ao direito de o filho buscar sua origem;
              </p>
            </li>
            <li>
              <p> Participação em audiência após alta hospitalar;</p>
            </li>
            <li>
              <p>
                O direito de desistência da entrega para adoção e seus prazos;
                assim como o direito de receber assistência integral por meio
                dos serviços presentes na rede de atendimento. Se for o caso,
                deverá fazer menção à recusa, pela gestante, de acompanhamento
                assistencial e/ou de saúde pela rede local de atendimento
              </p>
            </li>
            <li>
              <p>
                Se a gestante decide, após o nascimento do bebê, permanecer com
                o filho ou indicar familiares, o recém nascido permanecerá com a
                genitora ou sua família extensa e deverão receber apoio por meio
                dos serviços socioassistenciais, com acompanhamento previsto em
                lei de pelo menos 180 dias.
              </p>
            </li>
            <li>
              <p>
                Ressaltamos que a gestante/genitora tem o direito de entregar o
                filho para adoção, porém, não poderá indicar a pessoa que o
                receberá, a não ser que a entrega seja para o próprio genitor ou
                família extensa.
              </p>
            </li>
            <li>
              <p>
                Há ainda a possibilidade de, nas comarcas onde existe o serviço
                de acolhimento familiar devidamente implantado, o juiz, buscando
                prevenir qualquer risco para a criança e adotantes (e inclusive
                inseguranças por parte destes), encaminhar o bebê para família
                acolhedora, onde, em regra, ficará por menos de 30 dias, até que
                sua situação jurídica seja definida totalmente. Nesse período, o
                bebê permanecerá em família acolhedora devidamente preparada
                para acolhê-lo, com estrutura para oferecer atenção necessária
                durante o primeiro mês de vida, algo tão importante na primeira
                infância.
              </p>
            </li>
            <li>
              <p>
                Caso o suposto pai ou integrante da família extensa ou ampliada
                tenham conhecimento da gravidez pela própria gestante ou por
                terceiro – que não tenha a obrigação legal de zelar pelo sigilo
                solicitado pela gestante –, não estaremos diante de quebra do
                sigilo dentro do sistema de garantia de direitos da gestante e
                da infância e juventude.
                <br></br>
                Nesse caso, nada impede que o suposto pai e familiares procurem
                o sistema de Justiça, situação em que serão incluídos nos
                acompanhamentos realizados. Vale lembrar que a genitora também
                tem direito de não indicar ou apontar quem seria o suposto
                genitor da criança. Esse direito também deve ser respeitado por
                todo o sistema de atendimento à gestante.
              </p>
            </li>
            <li>
              <p>
                Ao tratar da busca pela família extensa, o Estatuto remete ao
                art. 25, que não só a define pelo laço de consanguinidade, mas
                também exige que o parente próximo tenha vínculos de afinidade e
                afetividade <br></br>
                Conclui-se, então, que a busca pela família extensa, nos casos
                de procedimento de Entrega Legal à adoção, ocorrerá, somente,
                quando a gestante/genitora renunciar seu direito ao sigilo.
                <br></br>
                Vale lembrar que o prazo máximo definido em lei para a busca de
                família extensa é de 90 dias.<br></br>
                Por fim, a Entrega Legal e consciente do filho para adoção terá
                como consequência a homologação pela Justiça dessa vontade e não
                a decretação da perda do poder familiar, esta sim, considerada
                uma punição aos genitores por não exercerem a maternidade/
                paternidade responsável.
              </p>
            </li>
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button  onClick={handleClose} style={BtnPurple}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalGestante;

const BtnPurple = {
  backgroundColor: "#952790",
  borderColor:"#952790"
 
}
