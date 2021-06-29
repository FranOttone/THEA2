import React from 'react'
import './ItemCard.css'


function ItemCard({item}) {
    return (
<div className="contenedor">
    <div className="Card">
        <div ><img className="imagen" alt="foto" src={item.img}></img>
        </div>
        <div className="contenedorTexto">
            <div className="nombre">{item.name}</div>
            <div className="precio">${item.price}</div>
        </div>
    </div>
</div>
    )
}

export default ItemCard
