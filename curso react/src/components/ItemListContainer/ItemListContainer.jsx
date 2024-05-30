import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      let data = await mockFetch(categoryId);
      setItems(data);
    };
    fetchItems();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{categoryId ? categoryId.toUpperCase() : "ALL ITEMS"}</h1>
      <ItemList items={items} />
    </div>
  );
};

const mockFetch = async (categoryId) => {
  const allItems = [
    { id: 1, name: "Military Uniform", description: "A standard military uniform.", stock: 10, image: "/path/to/image1.jpg", category: "uniforms" },
    { id: 2, name: "Military Boots", description: "Durable military boots.", stock: 5, image: "/path/to/image2.jpg", category: "footwear" },
  ];
  return categoryId ? allItems.filter(item => item.category === categoryId) : allItems;
};

export default ItemListContainer;
