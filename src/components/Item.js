import React, { useState } from "react";

function Item({ name, category }) {
  const [cartState, setCartState] = useState(true);
  const isInCart = cartState ? "" : "in-cart";
  function handleClick() {
    setCartState(() => !cartState)
  }
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
