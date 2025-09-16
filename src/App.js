import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Encabezado from './componentes/js/Encabezado';
import Queja from './componentes/js/Queja';
import Catalogo from './componentes/modulares/Catalogo';
import libroscatalogo from './componentes/js/datos';
import Login from './componentes/js/Login';
import Crear from './componentes/js/Crear';
import Recuperar from './componentes/js/Recuperar';
import Footer from './componentes/js/Footer';
import Formularioprestamo from './componentes/js/Formularioprestamo';

function App() {
  return (
    <Router>
      <Encabezado /> {/* Siempre visible */}
      
      <Routes>
        <Route path="/" element={<Catalogo librosCatalogo={libroscatalogo} />} /> {/* Página principal */}
        <Route path="/encabezado" element={<Encabezado />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/login" element={<Login />} />
        <Route path="/queja" element={<Queja />} /> {/* Ruta para la página de quejas */} 
        <Route path="/recuperar" element={<Recuperar />} /> 
        <Route path="/prestamo/:id" element={<Formularioprestamo />} /> {/* Ruta para el formulario de préstamo */}
        {/* Puedes agregar más rutas aquí */}
      </Routes>
      
      <Footer /> {/* Siempre visible */}
    </Router>
  );
}

export default App;