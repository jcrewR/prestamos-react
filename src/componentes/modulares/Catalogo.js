import React from 'react';
import LibroCard from './Librocard';
import styles from './Catalogo.module.css';


export default function Catalogo({ librosCatalogo = [] }) {
  return (
    <section className={styles.catalogo} id="catalogo">
      <h2 className={styles.titulo}>Catálogo de libros</h2>
      <div className={styles.grid}>
        {librosCatalogo.length > 0 ? (
          librosCatalogo.map((libro) => (
            <LibroCard key={libro.id} {...libro} />
          ))
        ) : (
          <p>No hay libros disponibles en este momento.</p>
        )}
      </div>
    </section>
  );
}