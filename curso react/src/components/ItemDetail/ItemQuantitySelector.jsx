// src/components/ItemDetail/ItemQuantitySelector.jsx
import React, { useState } from 'react';
import './ItemQuantitySelector.css';

const ItemQuantitySelector = ({ initial, stock, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-quantity-selector">
      <button onClick={decrement}>-</button>
      <span>{quantity}</span>
      <button onClick={increment}>+</button>
      <button onClick={() => onAdd(quantity)}>Add to Cart</button>
    </div>
  );
};

export default ItemQuantitySelector;
