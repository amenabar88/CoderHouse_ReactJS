// src/mocks/asyncMocks.js
const products = [
    {
      id: "1",
      name: "Uniforme Militar",
      description: "Uniforme completo para misiones militares.",
      price: "$150",
      image: "/images/uniforme.jpg",
      category: "uniformes",
    },
    {
      id: "2",
      name: "Insignia de Honor",
      description: "Insignia para condecoraciones y honores.",
      price: "$30",
      image: "/images/insignia.jpg",
      category: "insignias",
    },
    {
      id: "3",
      name: "Cinturón de Cuero",
      description: "Cinturón de cuero para uniforme.",
      price: "$50",
      image: "/images/cinturon.jpg",
      category: "accesorios",
    },
  ];
  
  export const getProducts = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          categoryId ? products.filter((prod) => prod.category === categoryId) : products
        );
      }, 1000);
    });
  };
  
  export const getProductById = (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === id));
      }, 1000);
    });
  };
  