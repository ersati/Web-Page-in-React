import React from "react";
import { Link } from "react-router-dom";
import "../style/ProductListPage.css";

const products = ["Geranium", "Rose", "Tulip", "Daisy"];
// const description = ["g", "r", "t", "d"];
// const products = {
//   name: ["Geranium", "Rose", "Tulip", "Daisy"],
//   description: ["g", "r", "t", "d"]
// };

const ProductListPage = () => {
  const list = products.map(product => (
    <li key={product}>
      <Link
        to={{
          pathname: `/product/${product}`,

          state: { text: "hello" }
        }}>
        {product}
      </Link>
    </li>
  ));

  //   const list = Object.keys(products).map(product => {
  //     // console.log(product.name);
  //     debugger;
  //     let arr1 = product.name;
  //     return (
  //       <li key={arr1}>
  //         <Link to={`/product/${arr1}`}>{arr1}</Link>
  //       </li>
  //     );
  //   });

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
