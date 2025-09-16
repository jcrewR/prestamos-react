import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Librocard.module.css';

export default function LibroCard({ titulo, autor, descripcion, imagen, alt }) {
  return (
    <div className={styles.card}>
      <div className="img-container">
        <img src={imagen} alt={alt} className={styles.imagen} />
       </div>
       <Link to={`/prestamo/${titulo}`}> {/* Usar el título como ID temporal */}
        <button id="solicitud">Solicitar préstamo</button>
      </Link>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.autor}>Autor: {autor}</p>
      <p className={styles.descripcion}>{descripcion}</p>
      {/* <Link to={`/prestamo/${titulo}`}> 
        <button id="solicitud">Solicitar préstamo</button>
      </Link> */}
      
    </div>
  );
}