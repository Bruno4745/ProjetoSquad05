import React from "react";
import ImgGestante from "./img/gestante.jpg";
import { Card } from "react-bootstrap";

const BannerGestante = () => {
  return (
    <Card>
      <Card.Img
        src={ImgGestante}
        alt="Card image"
        className="img responsive"
        style={{ width: "100%", height: "250px" }}
      />
    </Card>
  );
};
export default BannerGestante;
