import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Usamos useNavigate

const ZapatosEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Hook para navegación
  const [zapato, setZapato] = useState({
    marca: "",
    modelo: "",
    tamaño: "",
    tipo: "",
    imagen: "",
    estado: "",
    precio:"",
  });

  useEffect(() => {
    const fetchZapato = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/zapatos/${id}`);
        setZapato(response.data);
      } catch (error) {
        console.error("Error al obtener el zapato:", error);
      }
    };

    fetchZapato();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://127.0.0.1:8000/api/zapatos/${id}`,
        zapato
      );
      if (response.status === 200) {
        alert("Zapato actualizado correctamente");
        navigate("/"); // Usamos navigate para redirigir
      }
    } catch (error) {
      console.error("Error al editar el zapato:", error);
      alert("Hubo un error al actualizar el zapato");
    }
  };

  return (
    <div tyle={{ maxWidth: '600px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', backgroundColor: '#fff'}} >
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Editar Zapato</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px'}}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Marca</label>
          <input
            type="text"
            value={zapato.marca}
            onChange={(e) => setZapato({ ...zapato, marca: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Modelo</label>
          <input
            type="text"
            value={zapato.modelo}
            onChange={(e) => setZapato({ ...zapato, modelo: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}

            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Tamaño</label>
          <input
            type="number"
            value={zapato.tamaño}
            onChange={(e) => setZapato({ ...zapato, tamaño: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}

            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Tipo</label>
          <input
            type="text"
            value={zapato.tipo}
            onChange={(e) => setZapato({ ...zapato, tipo: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}

            required
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Imagen</label>
          <input
            type="file"
            value={zapato.imagen}
            onChange={(e) => setZapato({ ...zapato, imagen: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}

            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Estado</label>
          <input
            type="text"
            value={zapato.estado}
            onChange={(e) => setZapato({ ...zapato, estado: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}

            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginBottom: '5px', display: 'block' }}>Precio</label>
          <input
            type="number"
            value={zapato.precio}
            onChange={(e) => setZapato({ ...zapato, precio: e.target.value })}
            style={{width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '16px'}}
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default ZapatosEdit;
