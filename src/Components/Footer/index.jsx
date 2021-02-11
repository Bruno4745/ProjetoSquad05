import React from "react";

const Footer = () => {
  return (
    <footer style = {bgFooter} className="mt-4 text-center">
     
        <p className="text-secondary font-weight-bold py-4">&copy; Recomeçar 2021 - Todos os Direitos Reservados</p>
      
    </footer>
  );
};
export default Footer;

const bgFooter = {
  background: "rgba(255,231,109)",
}