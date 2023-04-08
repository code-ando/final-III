import React from "react";
import Form from "../Components/Form";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Contact = () => {
  const { theme } = useEstadosGlobalesContext();

  return (
    <div className={theme.color}>
      <h1 className="contact">¿Quieres conocernos?</h1>
      <p className="centered">Envíanos tus consultas y nos contactamos contigo</p>
      <Form />
    </div>
  );
};

export default Contact;
