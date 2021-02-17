import React  from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Contatos from "../../Pages/FaleConosco/Contato";
import Denuncia from "../../Pages/FaleConosco/Denuncias";
import Depoimentos from "../../Pages/FaleConosco/Depoimento";
import "./styles.css";

const TabBar = () => {

  return (

    <Tab.Container defaultActiveKey="second">
      
      <Row style={{ color: "#952790" }}>
        
        <Col sm={12} id="colTab" >
          <Nav id="navTab" >
            <Nav.Item>
              <Nav.Link eventKey="first" className="navlink">Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second" className="navlink">Denúncia</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third" className="navlink">Depoimento</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth" className="navlink">Chat</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>


        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first">

              <Contatos />

            </Tab.Pane>
            <Tab.Pane eventKey="second">

              <Denuncia />

            </Tab.Pane>
            <Tab.Pane eventKey="third">

              <Depoimentos />

            </Tab.Pane>
            <Tab.Pane eventKey="fourth">

            <button className="btn-purple mt-2" style={{width: '500px', marginLeft: '70px'}}>
        <a href="http://localhost:5001/chat" style={{color: "white", textDecoration: "none" }} target="_blank">CLIQUE AQUI</a>
      </button>

</Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  );
};
export default TabBar;
