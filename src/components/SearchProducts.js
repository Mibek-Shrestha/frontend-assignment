import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductDetails from "../items/ProductDetails";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSearchInputChange = (e) => {
    // Add your search logic here
    setSearchTerm(e.target.value.toLowerCase());
    // console.log(searchTerm);
  };
  const [product, setProduct] = useState([]);
  const handleSearchClick = async () => {
    if (searchTerm) {
      const productData = await fetch("https://fakestoreapi.com/products");
      const output = await productData.json();
      console.log(output);

      const searchedExercise = output.filter(
        (items) =>
          items.title.toLowerCase().includes(searchTerm) ||
          items.category.toLowerCase().includes(searchTerm)
      );
      console.log(searchedExercise);
      setProduct(searchedExercise);
    }
    setSearchTerm("");
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Search Yours Matching Clothes
      </h1>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          type="text"
          value={searchTerm}
          onChange={onSearchInputChange}
          id="searchInput"
          style={{
            padding: "8px",
            margin: "16px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            flex: "1",
          }}
          placeholder="Enter your search term..."
        />
        <button
          onClick={handleSearchClick}
          style={{
            marginLeft: "8px",
            padding: "8px 16px",
            borderRadius: "4px",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Search
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          margin: "16px",
          padding: "16px",
        }}
      >
        {product.map((items) => (
          <Link to={`/product/${items.id}`} key={items.id}>
            <div
              className="card"
              style={{ width: "25rem", marginBlock: "15px" }}
              key={items.id}
            >
              <img src={items.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{items.title}</h5>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{items.category}</li>
                <li className="list-group-item">Rs{items.price * 100}</li>
              </ul>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default SearchBar;
