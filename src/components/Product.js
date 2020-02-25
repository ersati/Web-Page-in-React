import React from "react";

const Product = props => {
  return (
    <article>
      {props.id}
      {props.name}
    </article>
  );
};

export default Product;
