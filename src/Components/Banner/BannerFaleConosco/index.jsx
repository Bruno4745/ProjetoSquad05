import React from "react";
import { Container } from "react-bootstrap";
import './faleConosco.css';


const BannerFaleConosco = () => {
  return (
    <>
      <Container className="containerBanner">
        <h1><span>FALE </span><strong>CONOSCO</strong></h1>
        <div className="underline"></div>
        <div className="bannerFaleConosco" />
       
      </Container>
        
    </>
  );
};

export default BannerFaleConosco;


