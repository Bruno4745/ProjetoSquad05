import React from 'react';
import ImgFaleConosco from './img/faleconosco.jpg'
import { Card } from 'react-bootstrap';


const  BannerFaleConosco = () => {
  return (
    <Card className="">
  <Card.Img src={ImgFaleConosco} alt="Card image" className="imgGestante responsive" style={{width:"100%",height:"250px" }} />
  <Card.ImgOverlay lg="6" md="10" ClassName="mx-auto" style={{color: "white", textShadow: "1px 1px 2px",marginTop:"80px"}}>
    <Card.Title className="text-center" style={{fontSize:"30px", color:"black"}}>Fale Conosco</Card.Title>
  </Card.ImgOverlay>
</Card>
  )
}
export default BannerFaleConosco;