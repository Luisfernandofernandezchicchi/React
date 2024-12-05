import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const ZapatoList = () => {
  const [zapatos, setZapatos] = useState([]);
  

  const fetchZapato = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/zapatos');
      if (response.data && Array.isArray(response.data)) {
        setZapatos(response.data); 
      } else {
        console.error("La respuesta no tiene un array de zapatos:", response.data);
      }
    } catch (error) {
      console.error("Error al obtener los zapatos:", error);
    }
  };

  const deleteZapato = async (id) => {
    try {
      const response = await axios.delete(`http://127.0.0.1:8000/api/zapatos/${id}`);
      if (response.status === 200) {
        alert("Zapatos eliminado correctamente");
        setZapatos(zapatos.filter((zapatos) => zapatos.id !== id));
      } else {
        alert("No se pudo eliminar el zapato");
      }
    } catch (error) {
      console.error("Error al eliminar el zapato:", error);
      alert("Hubo un problema al intentar eliminar el zapato");
    }
  };

  useEffect(() => {
    fetchZapato(); 
  }, []);

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <Typography variant="h3" align="center" gutterBottom>
        Lista de Zapatos
      </Typography>
      <Link to="/admin/zapatos/form">
        <Button color="primary" align="center">
          Agregar Nuevo Zapato
        </Button>
      </Link>

      <TableContainer  >
        <Table>
          <TableHead style={{ backgroundColor: '#f4f4f4' }}>
            <TableRow>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>ID</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Marca</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Modelo</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Tamaño</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Tipo</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Imagen</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Estado</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Precio</TableCell>
              <TableCell align="center" style={{ fontWeight: 'bold' }}>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {zapatos.length > 0 ? (
              zapatos.map((zapato) => (
                <TableRow key={zapato.id}>
                  <TableCell align="center">{zapato.id}</TableCell>
                  <TableCell align="center">{zapato.marca}</TableCell>
                  <TableCell align="center">{zapato.modelo}</TableCell>
                  <TableCell align="center">{zapato.tamaño}</TableCell>
                  <TableCell align="center">{zapato.tipo}</TableCell>
                  <TableCell align="center">
                  <img src={zapato.imagen} />
                  </TableCell>
                  <TableCell align="center">{zapato.estado}</TableCell>
                  <TableCell align="center">{zapato.precio}</TableCell>
                  <TableCell align="center">
                    <Link to={`/admin/zapatos/edit/${zapato.id}`}>
                      <Button  color="green" startIcon={<EditIcon />} >
                        Editar
                      </Button>
                    </Link>
                    
                    <Button
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteZapato(zapato.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center">
                  <Typography variant="h6">No hay Zapatos disponibles.</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ZapatoList;

