import React from "react";

const AllProducts = ({ products }) => {
  return (
    <>
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
        {products.map((items) => (
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
              <li className="list-group-item">
                Rs{items.price * 100}
                <button style={{ padding: "10px" }}> Add to Cart</button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllProducts;
