import React from 'react';
import { Form } from "react-bootstrap";

function Filtro(props) {
    return(
        <Form>
  <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Escolha a cidade</Form.Label>
    <Form.Control as="select" custom>
      <option>SP</option>
      <option>Diadema</option>
      <option>Guarulhos</option>
      <option>Mauá</option>
      <option>Suzano</option>
      <option>5</option>
      <option>5</option>
      <option>5</option>

    </Form.Control>
  </Form.Group>
</Form>
    );
};
 
export default Filtro

