import { Card, Col } from "react-bootstrap";

function Squad(props) {
  return (
    <Col md={4} className="mb-2">
      <Card className="w-100">
        <Card.Img
          variant="top"
          src={props.foto}
          alt="foto do desenvolvedor ou desenvolvedora"
        />
        <Card.Body>
          <Card.Title>{props.nome}</Card.Title>
          <Card.Text>{props.funcao}</Card.Text>
          <Card.Link href={props.github} target=" blank">
            GitHub
          </Card.Link>
          <Card.Link href={props.linkedin} target=" blank">
            Linkedin
          </Card.Link>
        </Card.Body>
      </Card>
    </Col>

  );
}

export default Squad;
