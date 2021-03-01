import React from "react";
import ImgBebe from "./img/bebemaes.jpeg";
import { Card } from "react-bootstrap";

const BannerGestante = () => {
  return (
      <Card.Img
        src={ImgBebe}
        alt="Card image"
        className="img responsive"
        style={{ width: "100%", height: "100%"}}
      />
  );
};
export default BannerGestante;
