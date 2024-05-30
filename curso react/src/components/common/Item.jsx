import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ product }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
}

export default Item;
