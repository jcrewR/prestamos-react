import React from 'react';
import '../css/Formulario.css';

function Crear() {
  return (
    <main className="Crear"> 
      <form>
         <h2>POR FAVOR COMPLETE LOS SIGUIENTES CAMPOS</h2>

        <div className="nombres">
          <label htmlFor="nombre">NOMBRE:</label>
          <input type="text" id="nombre" name="nombre" placeholder="jose pepito" />
        </div>

        <div className="apellidos">
            <label htmlFor="apellido">APELLIDO:</label>
            <input type="text" id="apellido" name="apellido" placeholder="perez gomez" />
        </div>

        <div className="direccion">
            <label htmlFor="direccion">DIRECCIÓN:</label>
            <input type="text" id="direccion" name="direccion" placeholder="calle 123 #.." />
        </div>

        <div className="telefono">
            <label htmlFor="telefono">TELÉFONO:</label>
            <input type="number" id="telefono" name="telefono" placeholder="123456789" />
        </div>
        <div className="usuario">
            <label htmlFor="usuario">USUARIO:</label>
            <input type="text" id="usuario" name="usuario" placeholder="jose123" />
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

export default Crear;