import React, { useState } from "react";

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
      {product.map((items) => (
        <div key={items.id}>
          <h1>{items.title}</h1>
          <h2>{items.category}</h2>
          <img src={items.image} alt={items.title} />
        </div>
      ))}
    </>
  );
};

export default SearchBar;
