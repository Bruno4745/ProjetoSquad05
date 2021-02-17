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
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>

  );
};
export default TabBar;
