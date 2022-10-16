import React from "react";
import { useContext } from "react";
import {cartCtx} from "../context/cartContext"
import { Link }  from "react-router-dom";

function CartView () {
    const context = useContext(cartCtx);
    const {cart, clearCart, removeFromCart}= context;

    let carritoVacio = false ;
    if (carritoVacio) {
        return <div><h1>Tu carrito está vacío, click aquí para seguir comprando <Link to="/categoria/productos">Productos</Link> </h1></div>; }



return (
    <div>
      {cart.map((item) => (
        <div>
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <p>{item.count}</p>
          <img src={item.img} alt="" />
          <strong>{item.price * item.count}</strong>
        </div>
      ))}
    </div>
  );
  }

  export default CartView;