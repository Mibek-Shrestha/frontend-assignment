// ProductDetail.js
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const ant = useContext(ProductContext);

  // Replace this with actual data fetching from an API
  // For simplicity, we use the same mock data here

  useEffect(() => {
    const productInfo = ant.find((p) => p.id === parseInt(id));
    setProduct(productInfo);
  }, [id]);

  if (!product) {
    return <div>Not found...</div>;
  }

  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col">
            <div className="card">
              <img src={product.image} alt="" height="500px" />
            </div>
          </div>
          <div class="col">
            <div class="card-body">
              <h5 class="card-title">{product.title}</h5>
              <i>
                <p class="card-text">{product.category}</p>
              </i>
              <p class="card-text">{product.description}</p>

              <p class="card-text">
                {" "}
                <b>Price Rs. {product.price * 100}</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
