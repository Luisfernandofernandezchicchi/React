import React from 'react';
import { Link } from 'react-router-dom'; // Usamos Link para la navegación
import "./ClienteCss/Header.css"


function Header() {

  return (
    <header className="header">
      <div className="logo">
        <h1>Mi Aplicación</h1>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/about">Acerca de</Link>
          </li>
          <li>
            <Link to="/contact">Contacto</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;