import React, { Component } from "react";
import { Card } from "react-bootstrap";

class Squad extends Component {
  render() {
    return (
      <Card style={{ width: "20rem" }}>
        <Card.Img
          variant="top"
          src={this.props.foto}
          alt="foto do desenvolvedor ou desenvolvedora"
        />
        <Card.Body>
          <Card.Title>{this.props.nome}</Card.Title>
          <Card.Text>{this.props.funcao}</Card.Text>
          <Card.Link href={this.props.github} target=" blank">
            GitHub
          </Card.Link>
          <Card.Link href={this.props.linkedin} target=" blank">
            Linkedin
          </Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default Squad;
