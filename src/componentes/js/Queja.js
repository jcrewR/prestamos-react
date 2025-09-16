import React from 'react';
import '../css/Formulario.css';

function Queja() {
  return (
    <main className="queja"> 
      <form>
         <h2>QUEJAS RECLAMOS O PETICIONES</h2>

         <div className="info">
           <p>Por favor haznos saber cual es tu inquietud queja o 
            tu peticion y nos pondremos
             en contacto contigo lo mas pronto posible.</p>
         </div>

         <div className="nombre">
              <label htmlFor="nombre">NOMBRE COMPLETO:</label>
              <input type="text" id="nombre" name="nombre" placeholder="Nombre completo" />
         </div>
        <div className="correo">
          <label htmlFor="correo">CORREO:</label>
          <input type="email" id="correo" name="correo" placeholder="biblioteca@...." />
        </div>

        <div className="Contenido">
            <label htmlFor="contenido">ESCRIBE TU MENSAJE:</label>
            <textarea id="contenido" name="contenido" placeholder="Escribe aquí tu mensaje..." rows="4"></textarea>
        </div>

        <button type="submit"> ENVIAR</button>
      </form>
    </main>
  );
}

export default Queja;