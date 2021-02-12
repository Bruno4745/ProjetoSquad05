import React from 'react';
import ImgFaleConosco from './img/faleconosco.jpg'
import { Card, Row, Col} from 'react-bootstrap';


const  BannerFaleConosco = () => {
  return (
    <Row style={bg_faleConosco} className="justify-content-md-center">
<Col md={6}>
  <Card.Img src={ImgFaleConosco} alt="Card image" className="imgGestante responsive" style={{width:"100%",height:"350px", opacity:'.8' }} />
</Col>

  <Card.ImgOverlay lg="6" md="6" ClassName="" style={{color: "white", textShadow: "1px 1px 2px",marginTop:"10%"}}>
    <Card.Title className="text-center" style={{fontSize:"4em", color:""}}>Fale Conosco</Card.Title>
  </Card.ImgOverlay>
</Row>
  )
}
export default BannerFaleConosco;

const bg_faleConosco = {
  background: 'linear-gradient(90deg, #77fde0 0%, rgba(250,255,255,1) 50%, #77fde0  100%)',
  
}