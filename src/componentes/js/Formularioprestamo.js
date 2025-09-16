import React from 'react';
import '../css/Formulario.css';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import librosCatalogo from '../js/datos.js'; // ajusta la ruta si es necesario

function Formularioprestamo() {
  const { id } = useParams();
  const libro = librosCatalogo.find((l) => l.titulo === id);

  const [formData, setFormData] = useState({
    fechaInicio: '',
    fechaFin: '',
    solicitante: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Préstamo registrado con éxito!');
    console.log('Datos del préstamo:', {
      ...formData,
      libroTitulo: libro?.titulo,
      libroAutor: libro?.autor,
      libroCodigo: libro?.codigo,
    });
  };

  if (!libro) {
    return (
      <main className="formulario-prestamo">
        <h2>Libro no encontrado</h2>
        <p>Verifica que el título esté correctamente escrito en la URL.</p>
      </main>
    );
  }

  return (
    <main className="formulario-prestamo">
     

      <form onSubmit={handleSubmit}>
        <h2>Formulario de préstamo</h2>

      <div className="descripcion-libro">
        <img src={libro.imagen} alt={`Portada de ${libro.titulo}`} />
        <p>{libro.descripcion}</p>
      </div>


        <div className="campo">
          <label htmlFor="libro">Nombre del libro:</label>
          <input type="text" id="libro" name="libro" value={libro.titulo} readOnly />
        </div>

        <div className="campo">
          <label htmlFor="autor">Autor:</label>
          <input type="text" id="autor" name="autor" value={libro.autor} readOnly />
        </div>

        <div className="campo">
          <label htmlFor="codigo">Código del libro:</label>
          <input type="text" id="codigo" name="codigo" value={libro.codigo} readOnly />
        </div>

        <div className="campo">
          <label htmlFor="fechaInicio">Fecha de préstamo:</label>
          <input type="date" id="fechaInicio" name="fechaInicio" value={formData.fechaInicio} onChange={handleChange} required />
        </div>

        <div className="campo">
          <label htmlFor="fechaFin">Duración del préstamo:</label>
          <input type="date" id="fechaFin" name="fechaFin" value={formData.fechaFin} onChange={handleChange} required />
        </div>

        <div className="campo">
          <label htmlFor="solicitante">Nombre del solicitante:</label>
          <input type="text" id="solicitante" name="solicitante" value={formData.solicitante} onChange={handleChange} required />
        </div>

        <button type="submit">Registrar préstamo</button>
      </form>
    </main>
  );
}

export default Formularioprestamo;