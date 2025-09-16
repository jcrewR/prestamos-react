import React from 'react';
import '../css/Formulario.css';

function Login() {
  return (
    <main className="Login"> 
      <form>
         <h2>POR FAVOR INGRESA TUS DATOS</h2>
        <div className="correo">
          <label htmlFor="correo">CORREO:</label>
          <input type="email" id="correo" name="correo" placeholder="biblioteca@...." />
        </div>

        <div className="password">
          <label htmlFor="contraseña">CONTRASEÑA:</label>
          <input type="password" id="contraseña" name="contraseña" placeholder="xxx" />
          <a href="/Recuperar">¿Olvidaste tu contraseña?</a>
          <a href="/Crear">¿No tienes cuenta? Crea tu usuario</a>
        </div>

        <button type="submit"> INGRESAR</button>
      </form>
    </main>
  );
}

export default Login;

