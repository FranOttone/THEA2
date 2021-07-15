//import ItemCount from '../../Components/itemCount/ItemCount'
import { useContext, useState } from "react";
//import {Link} from 'react-router-dom'
import Button from "@material-ui/core/Button";
import { CartContext } from "../../Components/CartContext/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ match }) {
	const { productos, addToCart, variable } = useContext(CartContext);
	const itemID = match.params.id;

	const filtro = productos.filter(function (item) {
		return item.id === itemID;
	});

	return (
		<div>
			{filtro.map((prod) => {
				return (
					<div className="contenedor" key={prod.id}>
						<div className="Card">
							<div>
								<img className="imagen" alt="foto" src={prod.img}></img>
							</div>
							<div className="contenedorTexto">
								<div className="nombre">{prod.name}</div>
								<div className="precio">${prod.price}</div>
								<div className="precio">Stock: {prod.stock}</div>
							</div>
						</div>
						{variable ? (
							<Button variant="contained" onClick={() => addToCart(prod.id)}>
								Agregar Al Carrito
							</Button>
						) : (
							<Link to="/cart">
								<Button variant="contained" color="secondary">
									Ir al carrito
								</Button>
							</Link>
						)}
					</div>
				);
			})}
		</div>
	);
}

export default ItemDetail;
