import React, { useState, useEffect } from "react";
import { Tabs, Tab, Container, Row, Col, Nav } from "react-bootstrap";
import Contatos from "../../Pages/FaleConosco/Contato";
import Denuncia from "../../Pages/FaleConosco/Denuncias";
import Depoimentos from "../../Pages/FaleConosco/Depoimento";
import "./styles.css";

const TabBar = () => {

  return (

    <div>

      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row style={{ border: "2px solid white", color: "#952790" }}>
          <Col sm={12} id="colTab" >
            <Nav id="navTab" >
              <Nav.Item>
                <Nav.Link eventKey="first" className="navlink">Contato</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" className="navlink">Denuncia</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third" className="navlink">Depoimento</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <div>
                  <Contatos />
                </div>

              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <div>
                  <Denuncia />
                </div>

              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <div>
                  <Depoimentos />
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>



  );
};
export default TabBar;
