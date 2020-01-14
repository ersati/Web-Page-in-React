import React from "react";
import { Link } from "react-router-dom";
import "../style/ProductListPage.css";

const products = ["Geranium", "Rose", "Tulip", "Daisy"];
// const description = ["g", "r", "t", "d"];

// const products = {
//   names: ["Geranium", "Rose", "Tulip", "Daisy"],
//   descriptions: ["g", "r", "t", "d"]
// };

const ProductListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link to={`/product/${product}`}>{product}</Link>
    </li>
  ));

  //   const list = products.map((id, product) => (
  //     <li key={product.name[id]}>
  //       <Link to={`/product/${product.name[id]}`}>{product.name[id]}</Link>
  //     </li>
  //   ));

  return (
    <div className="products">
      <h1>List of flowers types</h1>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;
