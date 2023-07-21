import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./components/Error";
import Home from "./pages/Home";

import ProductDetails from "./items/ProductDetails";

const App = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/:text" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
