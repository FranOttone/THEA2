import React from 'react';
import ItemCard from '../ItemsCard/ItemCard';
import {Link} from 'react-router-dom'
import {CartContext} from '../CartContext/CartContext'
import {useContext} from 'react'

//
//
function ItemsList() {
 const {productos}=useContext(CartContext)
    return (
        <div>
            {productos.map((producto)=>{
                return(

                    <div key={producto.id}>
                        <Link to={`/top/detail/${producto.id}`}>
                        <ItemCard producto={producto}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
};
   
    


export default ItemsList
