import React from "react";
import "../Styles/index.scss";
import logoFooterKasa from "../assets/logoKasaFooter.png";

const Footer = () => {
  return (
    <footer>
      <img src={logoFooterKasa} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
