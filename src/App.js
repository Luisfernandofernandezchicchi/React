// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Reemplazar Switch con Routes

import ZapatoList from './CRUD/ZapatosList';
import ZapatosEdit from './CRUD/ZapatosEdit';
import ZapatosForm from './CRUD/ZapatosForm';
import Home from './Cliente/HomeList';
import ZapatosLayaut from './CRUD/ZapatosLayaut';
import Login from './Acceso/Login';
import Header from './Cliente/Header';

const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path="/" element={<Header />}/>
        <Route path="/admin" element={<ZapatoList />} />
        <Route path="/admin/zapatos/form" element={<ZapatosForm />} />
        <Route path="/admin/zapatos/edit/:id" element={<ZapatosEdit />} />
        <Route path="/user" element={<ZapatosLayaut />} />
      </Routes>
    </Router>
  );
};

export default App;