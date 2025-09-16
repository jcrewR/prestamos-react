import donquijote from '../../assets/img/donquijote.webp';
import cienanos from '../../assets/img/cienanos.webp';
import elprincipito from '../../assets/img/principito.webp';
import romeoyjulieta from '../../assets/img/romeoyjulieta.jpg';
import elhobbit from '../../assets/img/elhobbit.jpg';

const librosCatalogo = [
  {
    id: 1,
    imagen: donquijote,
    alt: 'Don Quijote de la Mancha',
    titulo: 'Don Quijote de la Mancha',
    autor: 'Miguel de Cervantes',
    año: 1605,
    categoria: 'Novela clásica',
    descripcion: 'Una obra maestra de la literatura española, considerada la primera novela moderna.'
  },
  {
    id: 2,
    imagen: cienanos,
    alt: 'Cien años de soledad',
    titulo: 'Cien años de soledad',
    autor: 'Gabriel García Márquez',
    año: 1967,
    categoria: 'Realismo mágico',
    descripcion: 'Una novela cumbre del realismo mágico latinoamericano.'
  },
  {
    id: 3,
    imagen: elprincipito,
    alt: 'El Principito',
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
    año: 1943,
    categoria: 'Fábula filosófica',
    descripcion: 'Un cuento poético y filosófico que explora temas de la vida y la naturaleza humana.'
  },
  {
    id: 4,
    imagen: romeoyjulieta,
    alt: 'Romeo y Julieta',
    titulo: 'Romeo y Julieta',
    autor: 'William Shakespeare',
    año: 1597,
    categoria: 'Tragedia romántica',
    descripcion: 'La trágica historia de dos jóvenes amantes de familias rivales.'
  },
  {
    id: 5,
    imagen: elhobbit,
    alt: 'El Hobbit',
    titulo: 'El Hobbit',
    autor: 'J.R.R. Tolkien',
    año: 1937,
    categoria: 'Fantasía épica',
    descripcion: 'La aventura de Bilbo Bolsón en busca de un tesoro custodiado por un dragón.'
  }
];
export default librosCatalogo;