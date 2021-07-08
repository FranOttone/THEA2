import React from "react";
import ItemCard from "../ItemsCard/ItemCard";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { useContext, useEffect, useState } from "react";

//
//
function ItemsList() {
	const [productos, setProductos] = useState([]);

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
	return (
		<div>
			{productos.map((producto) => {
				return (
					<div key={producto.id}>
						<Link to={`/top/detail/${producto.id}`}>
							<ItemCard producto={producto} />
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default ItemsList;
