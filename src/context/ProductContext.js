import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //provide state and functionality to child components
  // const [onState, setOnState] = useState(false);
  const [items, setItems] = useState([]);
  //fetch products from api
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const output = await response.json();
        // console.log(output);
        setItems(output);
      } catch (error) {
        console.log("error");
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={items}> {children}</ProductContext.Provider>
  );
};

export default ProductProvider;
