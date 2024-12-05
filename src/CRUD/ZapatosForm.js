import React, { useState } from 'react';
import axios from 'axios';

const ZapatosForm = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [tipo, setTipo] = useState('');
  const [imagen, setImagen] = useState('');
  const [estado, setEstado] = useState('');
  const [precio, setPrecio] = useState('');
  const [mensaje, setMensaje] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!marca || !modelo || !tamaño || !tipo|| !imagen || !estado|| !precio) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }

    const ZapatoData = {
      marca,
      modelo,
      tamaño,
      tipo,
      imagen,
      estado,
      precio,
    };

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/zapatos', ZapatoData);

      setMensaje('Zapatos agregado exitosamente');

      setMarca('');
      setModelo('');
      setTamaño('');
      setTipo('');
      setImagen('');
      setEstado('');
      setPrecio('');
    } catch (error) {
      console.error('Error al agregar el zapato:', error.response ? error.response.data : error);
      setMensaje('Error al agregar el zapato. Intenta nuevamente.');
    }
  };

  return (
    <div style={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Agregar Zapato</h2>

      {/* Mostrar mensaje de error o éxito */}
      {mensaje && (
        <div
          style={{
            padding: '10px',
            marginBottom: '10px',
            color: 'white',
            textAlign: 'center',
            borderRadius: '4px',
            fontWeight: 'bold',
          }}
        >
          {mensaje}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Marca</label>
          <input
            type="text"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }} 
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{  marginBottom: '5px', display: 'block' }}>Modelo</label>
          <input
            type="text"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{  marginBottom: '5px', display: 'block' }}>Tamaño</label>
          <input
            type="number"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Tipo</label>
          <input
            type="text"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }} 
          />
        </div>
  


        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Imagen</label>
          <input
            type="file"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Estado</label>
          <input
            type="text"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Precio</label>
          <input
            type="number"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            style={{ width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px' }} 
          />
        </div>




        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'green',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
          }}
        >
          Agregar nuevo Zapato
        </button>
      </form>
    </div>
  );
};

export default ZapatosForm;




