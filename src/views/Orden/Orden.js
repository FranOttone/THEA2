import { Button, TextField } from "@material-ui/core";
import { useState, useContext } from "react";
import { CartContext } from "../../Components/CartContext/CartContext";

import { db } from "../../firebase";

const Orden = () => {
	const [values, setValues] = useState("");

	const [buyer, setBuyer] = useState({});
	const { cart, total } = useContext(CartContext);

	const newOrder = {
		usuario: { buyer },
		items: [{ cart }],
		precioTotal: total,
	};

	const addOrEdit = async (linkObject) => {
		await db.collection("usuarios").doc().set(linkObject);
	};
	const handleOnSumbit = (e) => {
		e.preventDefault();
		console.log(values);
		addOrEdit(newOrder);
	};
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		setBuyer({ ...values, [name]: value });
	};
	return (
		<>
			<form>
				<TextField
					onChange={handleOnChange}
					label="Nombre"
					variant="outlined"
					name="Nombre"
				/>
				<TextField
					onChange={handleOnChange}
					label="Celular"
					variant="outlined"
					name="Celular"
				/>
				<TextField
					onChange={handleOnChange}
					label="E-mail"
					variant="outlined"
					name="E-mail"
				/>
			</form>
			<Button variant="contained" color="primary" onClick={handleOnSumbit}>
				Finalizar
			</Button>
		</>
	);
};

export default Orden;
