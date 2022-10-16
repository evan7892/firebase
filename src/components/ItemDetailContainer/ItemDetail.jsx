import React, { useContext, useState } from "react";
import FlexWrapper from "../FlexWrapper/FlexWrapper";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import "./itemDetail.css"
import {cartCtx} from "../context/cartContext"

function ItemDetail({ item }) {
  const [isInCart, setIsInCart] = useState(false);
  const { addItem } = useContext(cartCtx);

  function handleAddToCart(count) {
    addItem(item, count);
    setIsInCart(true);
  }

  const stylePrice = {
    color: item.offer ? "#22cc77" : "#333333",
  };

  // 1. Condicional Ternario condicion? ... : ...
  return (
    <FlexWrapper rows={true}>
      <div className="main container">
        <h1>{item.title}</h1>
        <img src={item.img} alt={item.title} />
        <h3 style={stylePrice}>$ {item.price}</h3>
      </div>
      {item.stock === 0 && (
        <span style={{ color: "#aa0033" }}>Producto sin stock</span>
      )}
      {isInCart ? (
        <Link to="/cart">Ir al carrito</Link>
      ) : (
        <ItemCount stock={5} onAddToCart={handleAddToCart} />
      )}
    </FlexWrapper>
  );
}

export default ItemDetail;