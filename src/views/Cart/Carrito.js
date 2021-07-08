import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Components/CartContext/CartContext";

function Carrito() {
	const { cart, reducir, aumentar, removeProduct, total, getTotal } =
		useContext(CartContext);
	getTotal();
	if (cart.length === 0) {
		return <h2>No tienes productos</h2>;
	} else {
		return (
			<div>
				{cart.map((producto) => {
					return (
						<div className="contenedor" key={producto.id}>
							<div className="Card">
								<div>
									<img className="imagen" alt="foto" src={producto.img}></img>
								</div>
								<div className="contenedorTexto">
									<div className="nombre">{producto.name}</div>
									<div className="precio">
										${producto.price * producto.count}
									</div>
								</div>
								<button onClick={() => reducir(producto.id)}>-</button>
								<span>{producto.count}</span>
								<button onClick={() => aumentar(producto.id)}>+</button>
							</div>
							<div onClick={() => removeProduct(producto.id)}>X</div>
						</div>
					);
				})}
				<div>Total: ${total}</div>
			</div>
		);
	}
}
export default Carrito;
