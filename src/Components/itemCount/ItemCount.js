import React, {useState,  useContext} from 'react';
import Button from '@material-ui/core/Button'
import { CartContext } from '../CartContext/CartContext';



const ItemCount =({stock,initial}) =>{


const [cantidad, setCantidad] = useState((initial));


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
        </div>
    )
}
export default ItemCount