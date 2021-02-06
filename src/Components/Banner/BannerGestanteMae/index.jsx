import React from 'react';
import ImgGestante from './img/gestante.jpg'
import { Card } from 'react-bootstrap';


const  BannerGestante = () => {
  return (
    <Card>
  <Card.Img src={ImgGestante} alt="Card image" className="imgGestante responsive" style={{width:"100%",height:"250px" }} />
  <Card.ImgOverlay lg="6" md="10" ClassName="mx-auto" style={{color: "white", textShadow: "1px 1px 2px",marginTop:"80px"}}>
    <Card.Title>INFORMAÇÕES A GESTANTE/MÃE</Card.Title>
    <Card.Text >
    Aqui, você vai encontrar orientações para realização da entrega voluntária da criança para adoção.
    </Card.Text>
  </Card.ImgOverlay>
</Card>
  )
}
export default BannerGestante;