import React from "react";
import ImgProfissionais from "./img/profissionais.jpeg";
import { Card } from "react-bootstrap";

const BannerProfissionais = () => {
  return (
    <Card.Img
      src={ImgProfissionais}
      alt="Card image"
      className="img responsive"
      style={{ width: "100%",height:"100%" }}
    />
    
  );
};

export default BannerProfissionais;
