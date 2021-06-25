import  {useState,useEffect} from 'react'
import { itemsData } from '../../Components/Data/ItemData';

 

function ItemDetail({ match }) {
    
    let itemId=match.params.id
    
    const [item, setItem]= useState(itemsData)
    useEffect(()=>{
         new Promise ((resolve,reject)=>
        {
            resolve(setItem(itemId))
        });
        
        
    },[itemId])
    return (
        <div>
            <h1>Detalles</h1>
            {item.map((detalle)=>{
                return(
                    <div key={detalle.id}>
                        <div className="contenedor">
                            <div className="Card">
                            <div ><img className="imagen" alt="foto" src={detalle.img}></img>
                            </div>
                            <div className="contenedorTexto">
                                <div className="nombre">{detalle.name}</div>
                                <div className="precio">${detalle.price}</div>
                            </div>
                            </div>
                            </div>
                    </div>
                )
            })}

        </div>
    )
}

export default ItemDetail
