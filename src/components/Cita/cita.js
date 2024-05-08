import './cita.css';
import React from 'react';

function Cita({ mascota, propietario, fecha, hora, sintomas }) {
  const eliminarCita = () => {
    setCitaS(
      [
          ...citaS,
          {
            /*mascota: ,
            propietario: ,
            fecha: ,
            hora: ,
            sintomas: */
          }
      ]
  )
}
  return (
    <div className="cita">
      <p>Mascota: <span>{mascota}</span></p>
      <p>Dueño: <span>{propietario}</span></p>
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
      <p>Sintomas: <span>{sintomas}</span></p>
      <button onClick = {eliminarCita} className="button eliminar u-full-width">ELIMINAR x</button>
    </div>
  );
}

export default Cita;
