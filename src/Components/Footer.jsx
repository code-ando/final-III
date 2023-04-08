import React from "react";
import { useEstadosGlobalesContext } from "./utils/global.context";

const Footer = () => {
  const { theme } = useEstadosGlobalesContext();
  return (
    <footer className={theme.color}>
      <p>Powered by</p>
      <img src="../images/DH.png" alt="DH-logo" />
      
      <img src="/images/ico-facebook.png" alt="ícone do facebook" className="iconSocial" />
      <img src="/images/ico-instagram.png" alt="ícone do instagram" className="iconSocial" />
      <img src="/images/ico-whatsapp.png" alt="ícone do whatsapp" className="iconSocial"/>
      <img src="/images/ico-tiktok.png" alt="ícone do tiktok" className="iconSocial" />      
      
    </footer>
  );
};

export default Footer;
