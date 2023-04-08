import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useEstadosGlobalesContext } from "../Components/utils/global.context";

const Detail = () => {
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { odontologos, theme } = useEstadosGlobalesContext();
  const { id } = useParams();

  const [odontologo, setOdontologo] = useState(undefined);

  useEffect(() => {
    const o = odontologos.find((odontologo) => {
      return odontologo.id == id;
    });
    setOdontologo(o);
  }, [odontologos]);

  return (
    <div className={theme.color}>
      <h1>Detalle del Dr </h1>
      <div className="conte">
      <img
          className="card-img-top"
          src="/images/doctora.jpg"
          alt="doctor placeholder"
          />
      {odontologo && (
        
        <ul className="list">
            <li>Name: {odontologo.name}</li>
            <li>Email: {odontologo.email}</li>
            <li>Telefono: {odontologo.phone}</li>
            <li>Sitio Web: {odontologo.website}</li>
          </ul>
            
             
          
        
      )}
      {!odontologo && <h1>Dentist Not Found</h1>}
    </div>
    </div>
  );
};

export default Detail;
