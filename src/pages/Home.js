import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import SearchProducts from "../components/SearchProducts";
import Banner from "../components/Banner";
const Home = () => {
  const products = useContext(ProductContext);
  console.log(products);

  return (
    <div>
      <Banner />
      <SearchProducts />
    </div>
  );
};

export default Home;
