import React from 'react';
import '../css/Formulario.css';

function Recuperar() {
  return (
    <main className="Recuperar"> 
      <form>
         <h2>POR FAVOR INGRESA TUS DATOS</h2>

        <div className="correo">
          <label htmlFor="correo">CORREO:</label>
          <input type="email" id="correo" name="correo" placeholder="biblioteca@...." />
        </div>

        <button type="submit"> ENVIAR</button>
      </form>
    </main>
  );
}

export default Recuperar;