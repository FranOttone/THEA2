import { useContext, useEffect, useState } from "react";
import { db } from "../../firebase";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { CartContext } from "../../Components/CartContext/CartContext";

function ItemDetail({ match }) {
	const [productos, setProductos] = useState([]);

	const { addToCart, variable } = useContext(CartContext);

	const getProducts = () => {
		db.collection("Superior/buzos/id").onSnapshot((querySnapshot) => {
			const docs = [];

			querySnapshot.forEach((doc) => {
				docs.push({ ...doc.data(), id: doc.id });
				console.log(docs);
			});

			setProductos(docs);
		});
	};
	useEffect(() => {
		getProducts();
	}, []);

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
									Terminar mi compra{" "}
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
