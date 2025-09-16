import React from 'react';
import '../css/Formulario.css';

function options() {
  return (
    <main className="opcionesuser"> 
      <form>
         <h2>POR FAVOR COMPLETE LOS SIGUIENTES CAMPOS</h2>

         <div className="foto">
          <label htmlFor="foto">FOTO:</label>
          <input type="file" id="foto" name="foto" />
         </div>
         
        <div className="direccion">
            <label htmlFor="direccion">DIRECCIÓN:</label>
            <input type="text" id="direccion" name="direccion" placeholder="calle 123 #.." />
        </div>

        <div className="telefono">
            <label htmlFor="telefono">TELÉFONO:</label>
            <input type="number" id="telefono" name="telefono" placeholder="123456789" />
        </div>

        <div className="correo">
          <label htmlFor="correo">CORREO:</label>
            <input type="email" id="correo" name="correo" placeholder="biblioteca@...." />
        </div>

        <div className="password">
            <label htmlFor="contraseña">CONTRASEÑA:</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="xxx" />  
        </div>       

        <button type="submit">REGISTRARME</button>
      </form>
    </main>
  );
}

export default options;   