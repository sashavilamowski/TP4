import './form.css';
import { useState } from 'react';
import React from 'react';

function Form() {
  <Form setCitas = {setCitaS}></Form>
  const agregarCita = () => {
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
}
  return (
    <div class = "one-half.column">
     
      <div class = "onn">
      <h2>Crear mi Cita</h2>
      <form class="u-full-width">
        <label className="u-full-width"><b>Nombre Mascota</b></label>
        <input name = "mascota" type="text"  className="u-full-width" placeholder="Nombre Mascota" value="" />
        <label className="u-full-width"><b>Nombre Dueño</b></label>
        <input name = "propietario" type="text" className="u-full-width" placeholder="Nombre dueño de la mascota" value="" />
        <label className="u-full-width"><b>Fecha</b></label>
        <input name = "fecha" type="date"  className="u-full-width" value="" />
        <label className="u-full-width"><b>Hora</b></label>
        <input name = "hora" type="time"  className="u-full-width" value="" />
        <label className="u-full-width"><b>Sintomas</b></label>
        <textarea  name = "sintomas" className="u-full-width"></textarea>
        <button onClick = {agregarCita} type="submit" className="u-full-width button-primary">AGREGAR CITA</button>
      </form>
    </div>
    </div>
  );


export default Form;
