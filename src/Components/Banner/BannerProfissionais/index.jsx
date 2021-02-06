import React from 'react';
import ImgProfissionais from './img/profissionais2.jpg'
import { Card } from 'react-bootstrap';

const BannerProfissionais = () => {
  return (
    <Card >
    <Card.Img src={ImgProfissionais} alt="Card image"  className="imgProfissionais responsive" style={{width:"100%",height:"250px" }}/>
    <Card.ImgOverlay  ClassName="mx-auto" style={{ color: "black", textShadow: "1px 1px 2px",marginTop:"80px"}}>
      <Card.Title>INFORMAÇÕES AOS PROFISSIONAIS</Card.Title>
      <Card.Text >
      Aqui você vai encontrar orietações sobre a <strong>entrega voluntária</strong> aos profissionais independente da ocupação na rede de atendimento.
      </Card.Text>
    </Card.ImgOverlay>
  </Card>
  );
}

export default BannerProfissionais