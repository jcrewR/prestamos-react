import React, { useState } from 'react';
import '../css/Encabezado.css';

function Encabezado({ usuario }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const cerrarMenu = () => setMenuVisible(false);
  const toggleMenu = () => setMenuVisible(!menuVisible);
  const handleBuscar = () => {
    console.log('Buscando:', busqueda);
    // Aquí podrías integrar lógica de búsqueda o pasarla como prop
  };

  return (
    <header className="encabezado">
      <div className="hamburger-menu">
        <button onClick={toggleMenu}>☰</button>
        {menuVisible && (
          <div className="menu-options">
            {!usuario ? (
              <>
                <a href="/Login" onClick={cerrarMenu}>Inicio de sesión</a>
                <a href="/Crear" onClick={cerrarMenu}>Crea tu usuario</a>
                <a href="/Queja" onClick={cerrarMenu}>Contáctanos</a>
              </>
            ) : (
              <>
                <a href="/Configuracion" onClick={cerrarMenu}>Configuración</a>
                <a href="/CerrarSesion" onClick={cerrarMenu}>Cerrar sesión</a>
              </>
            )}
          </div>
        )}
      </div>

   <a href="/"> 
    <h1>BIENVENIDO A SU BIBLIOTECA</h1>
   </a>   
      <div className="buscador-container">
        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Título, Autor, Código"
        />
        <button type="button" onClick={handleBuscar}>
          BUSCAR
        </button>
      </div>

      {usuario && (
        <div className="usuario-avatar">
          {usuario.foto ? (
            <img src={usuario.foto} alt="Avatar" className="avatar-imagen" />
          ) : (
            <div className="avatar-default"></div>
          )}
        </div>
      )}
    </header>
  );
}

export default Encabezado;