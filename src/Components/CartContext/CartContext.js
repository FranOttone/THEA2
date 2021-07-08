import React, { createContext, useEffect, useState } from "react";
import { db } from "../../firebase";
export const CartContext = createContext([]);

const CartProvider = (props) => {
	const [cart, setCart] = useState([]);
	// eslint-disable-next-line no-unused-vars
	const [productos, setProductos] = useState([]);
	const getProducts = () => {
		db.collection("productos").onSnapshot((querySnapshot) => {
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

	const [total, setTotal] = useState();

	const [variable, setVariable] = useState(true);

	const reducir = (id) => {
		cart.forEach((item) => {
			if (item.id === id) {
				item.count === 1 ? (item.count = 1) : (item.count -= 1);
			}
		});
		setCart(cart);
	};

	const aumentar = (id) => {
		cart.forEach((item) => {
			if (item.id === id) {
				item.count += 1;
			}
		});
		setCart(cart);
	};

	const addToCart = (id) => {
		const check = cart.every((product) => {
			return product.id !== id;
		});
		console.log(check);
		if (check) {
			const data = productos.filter((product) => {
				return product.id === id;
			});
			setCart([...cart, ...data]);
		} else {
			alert("El producto ya fue agregado");
		}
		setVariable(!true);
	};

	const removeProduct = (id) => {
		cart.forEach((item, index) => {
			if (item.id === id) {
				cart.splice(index, 1);
			}
		});
		setCart(cart);
	};

	const getTotal = () => {
		const res = cart.reduce((prev, item) => {
			return prev + item.price * item.count;
		}, 0);
		setTotal(res);
	};

	return (
		<CartContext.Provider
			value={{
				cart,
				productos,
				addToCart,
				aumentar,
				reducir,
				removeProduct,
				getTotal,
				total,
				variable,
			}}
		>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;
