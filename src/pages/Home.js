import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchProducts from "../components/SearchProducts";
const Home = () => {
  const products = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <h1>Home</h1>
      <SearchProducts />
    </div>
  );
};

export default Home;
