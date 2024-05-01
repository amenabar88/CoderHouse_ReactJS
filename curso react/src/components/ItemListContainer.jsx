import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { obtenerDetalleProducto } from './api'; // Reemplaza 'api' por el nombre de tu archivo de funciones de API

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const cargarDetalleProducto = async () => {
      const detalleProducto = await obtenerDetalleProducto(id);
      setProducto(detalleProducto);
    };

    cargarDetalleProducto();
  }, [id]);

  if (!producto) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Detalles del producto {id}</h2>
      <p>{producto.nombre}</p>
      <p>{producto.descripcion}</p>
      <p>{producto.precio}</p>
    </div>
  );
}

export default DetalleProducto;
