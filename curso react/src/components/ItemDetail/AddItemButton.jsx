// src/components/ItemDetail/AddItemButton.jsx
import React from "react";
import "./AddItemButton.css";

function AddItemButton({ onAdd }) {
  return (
    <button className="add-item-button" onClick={onAdd}>
      Añadir al Carrito
    </button>
  );
}

export default AddItemButton;
