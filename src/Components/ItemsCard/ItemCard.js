import React from 'react'
import './ItemCard.css'


function ItemCard({producto}) {
    return (
<div className="contenedor">
    <div className="Card">
        <div ><img className="imagen" alt="foto" src={producto.img}></img>
        </div>
        <div className="contenedorTexto">
            <div className="nombre">{producto.name}</div>
            <div className="precio">${producto.price}</div>
        </div>
    </div>
</div>
    )
}

export default ItemCard
