import React, {useState,  useContext} from 'react';
import Button from '@material-ui/core/Button'
import { CartContext } from '../CartContex/CartContex';



const ItemCount =({stock,initial}) =>{


const [cantidad, setCantidad] = useState((initial));
const {addItem}= useContext(CartContext)

const sumar = () => {
    if(cantidad < stock){
      setCantidad( cantidad +1)
    }
   }
   const restar = () => {
    if(cantidad > initial){
      setCantidad( cantidad - 1)
    }
   }

    return(
        <div>
            <Button variant="contained" onClick ={restar}>-</Button>
            <div>{cantidad}</div>
            <Button variant="contained" onClick={sumar}>+</Button>
            <Button variant="contained" onClick={ addItem}>
                Agregar Al Carrito
            </Button>
        </div>
    )
}
export default ItemCount