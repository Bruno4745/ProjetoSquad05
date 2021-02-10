import React from 'react'
import { Card, Col } from 'react-bootstrap';


function TabelaDeParceiros(props) {
  return (
      <Col className="mb-4 text-center" lg={4} md={6}>
        <Card className="h-100">
          <Card.Header><h4>{props.nome}</h4></Card.Header>
          <Card.Body>
            <Card.Title>{props.cidade}</Card.Title>
            <Card.Text>{props.telefone}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default TabelaDeParceiros
