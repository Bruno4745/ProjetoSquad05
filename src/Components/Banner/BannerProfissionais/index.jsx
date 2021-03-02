import React from "react";
import { Container } from "react-bootstrap";
import './profissionais.css';


const BannerProfissionais = () => {
  return (
    <>
      <Container className="containerBanner">
        <h1><span>INFORMAÇÕES AOS </span><strong>PROFISSIONAIS</strong></h1>
        <div className="underline"></div>
        <div className="bannerProfissionais" />
       
      </Container>
        
    </>
  );
};

export default BannerProfissionais;


