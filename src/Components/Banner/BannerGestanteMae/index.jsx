import React from "react";
import { Container } from "react-bootstrap";
import './gestante.css';


const BannerGestante = () => {
  return (
    <>
      <Container className="containerBanner">
        <h1><span>INFORMAÇÕES À </span><strong>GESTANTE/ MÃE</strong></h1>
        <div className="underline"></div>
        <div className="bannerGestante" />
       
      </Container>
        
    </>
  );
};

export default BannerGestante;


