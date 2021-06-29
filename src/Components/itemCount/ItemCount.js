import React, {useState} from 'react';
import Button from '@material-ui/core/Button'


const ItemCount =({stock,initial,onAdd}) =>{


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
            <Button variant="contained" onClick={()=>onAdd(cantidad)}>
                Agregar Al Carrito
            </Button>
        </div>
    )
}
export default ItemCount