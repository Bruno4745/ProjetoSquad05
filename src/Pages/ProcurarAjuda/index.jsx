import React from "react";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import TabelaDeParceiros from "../../Components/ProcurarAjuda/TabelaDeParceiros";
import ModalLogin from "../../Components/ProcurarAjuda/Login";

const ProcurarAjuda = () => {
  const [parceiros, setParceiros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const resposta = await fetch("http://localhost/api/procurarAjuda");
      const dados = await resposta.json();
      setParceiros(dados);
    }
    fetchData();
  }, []);

  return (
    <Container>
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

      <Container className="mt-5">
        <h2>Veja No Mapa</h2>
        <div
          className="mapouter"
          style={{
            position: "relative",
            textAlign: "right",
            height: "500px",
            width: "600px",
          }}
        >
          <div
            className="gmap_canvas"
            style={{
              overflow: "hidden",
              background: "none!important",
              height: "500px",
              width: "600px",
            }}
          >
            <iframe
              width="600"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=%20Mau%C3%A1&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
            <a href="https://yt2.org"></a>
            <br />
          </div>
        </div>
      </Container>
    </Container>
  );
};

export default ProcurarAjuda;
