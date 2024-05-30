import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      const data = await mockFetchItem(itemId);
      setItem(data);
    };
    fetchItem();
  }, [itemId]);

  return (
    <div className="item-detail-container">
      {item ? <ItemDetail item={item} /> : <p>Loading...</p>}
    </div>
  );
};

const mockFetchItem = async (id) => {
  const items = [
    { id: 1, name: "Military Uniform", description: "A standard military uniform.", stock: 10, image: "/path/to/image1.jpg" },
    { id: 2, name: "Military Boots", description: "Durable military boots.", stock: 5, image: "/path/to/image2.jpg" },
    // Add more items here...
  ];
  return items.find(item => item.id.toString() === id);
};

export default ItemDetailContainer;
