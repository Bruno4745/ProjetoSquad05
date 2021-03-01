import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
import ModalLogin from "../../Components/ProcurarAjuda/Login";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch(
        "https://protected-sierra-12413.herokuapp.com/procurarAjuda"
      );
      const dados = await resposta.json();
      setParceiros(dados);
    }
    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        {parceiros &&
          parceiros.map((item) => (
            <TabelaDeParceiros
              key={item.id_parceiros}
              id={item.id_parceiros}
              nome={item.nome}
              cidade={item.cidade}
              telefone={item.telefone}
            />
          ))}
      </Row>
      <ModalLogin />

      <Container fluid className="mt-5">
        <h2>Veja No Mapa</h2>
        <Row
          className="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "100%",
            width: "100%",
          }}
        >
          <Row
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none!important",
            }}
          >
            <Col xs={12} sm={12} md={9} lg={6}>
              <iframe
                src="https://maps.google.com/maps?q=%20Mau%C3%A1&t=&z=13&ie=UTF8&iwloc=&output=embed"
                style={{
                  width:"1000px",
                   height:"300px",
                  frameBorder: "0",
                  scrolling: "no",
                  marginHeight: "0",
                  marginWidth: "0"
                }}
              ></iframe>
              <a href="https://yt2.org"></a>
            </Col>
          </Row>
        </Row>
      </Container>
    </Container>
  );
};

export default ProcurarAjuda;
