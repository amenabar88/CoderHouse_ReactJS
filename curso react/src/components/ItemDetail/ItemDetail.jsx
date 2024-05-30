import React from "react";
import Description from "./Description";
import AddItemButton from "./AddItemButton";
import ItemQuantitySelector from "./ItemQuantitySelector";
import "./ItemDetail.css";

const ItemDetail = ({ item }) => {
  return (
    <div className="item-detail">
      <img src={item.image} alt={item.name} className="item-image" />
      <div className="item-info">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <ItemQuantitySelector initial={1} stock={item.stock} onAdd={(quantity) => console.log(`Added ${quantity} items to cart`)} />
        <Description text={item.description} />
        <AddItemButton />
      </div>
    </div>
  );
};

export default ItemDetail;
