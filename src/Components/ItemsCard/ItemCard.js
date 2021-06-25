import React from 'react'
import './ItemCard.css'


function ItemCard({data}) {
    return (
<div className="contenedor">
    <div className="Card">
        <div ><img className="imagen" alt="foto" src={data.img}></img>
        </div>
        <div className="contenedorTexto">
            <div className="nombre">{data.name}</div>
            <div className="precio">${data.price}</div>
        </div>
    </div>
</div>
    )
}

export default ItemCard
