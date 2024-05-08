import './citas.css';
import React from 'react';
import Cita from '../Cita/cita.js';

function Citas() {
  <Citas citas={citaS} setCitas = {setcitaS}></Citas>
  return (
    <div>
      <h2>Administra tus citas</h2>
      <div className="citas">
        <Cita
          mascota="Nina"
          propietario="Martin"
          fecha="2021-08-05"
          hora="08:20"
          sintomas="Le duele la pierna"
        />
        <Cita
          mascota="Sifon"
          propietario="Flecha"
          fecha="2023-08-05"
          hora="09:24"
          sintomas="Duerme mucho"
        />
        <Cita
          mascota="Floki"
          propietario="Ari"
          fecha="2023-08-05"
          hora="16:15"
          sintomas="No está comiendo"
        />
      </div>
    </div>
  );
}

export default Citas;
