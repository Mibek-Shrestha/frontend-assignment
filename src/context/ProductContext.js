import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //provide state and functionality to child components
  const [items, setItems] = useState([]);
  //fetch products from api
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const output = await response.json();
      // console.log(output);
      setItems(output);
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={items}> {children}</ProductContext.Provider>
  );
};

export default ProductProvider;
