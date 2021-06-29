import ItemCount from '../../Components/itemCount/ItemCount'
import { itemsData } from '../../Components/Data/ItemData';
import {useState} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
 

function ItemDetail({match}) {

const itemID =match.params.id

let filtro =itemsData.filter(function(item){
   
   
return item.id ===itemID
   })

const onAdd=(cantidad)=>{
        setTotal(cantidad)
        setVariable(false)

}

const [total,setTotal]= useState()
const [variable,setVariable]=useState(true)
console.log(total)
    

return (
        <div>
            {filtro.map((item)=>{
                return(
                    <div className="contenedor" key={item.id}>
                        <div className="Card">
                            <div ><img className="imagen" alt="foto" src={item.img}></img>
                            </div>
                            <div className="contenedorTexto">
                                <div className="nombre">{item.name}</div>
                                <div className="precio">${item.price}</div>
                                <div className="precio">Stock: {item.stock}</div>
                            </div>
                        </div>
                        { variable ?(
                        <ItemCount stock={item.stock}
                                    initial={1}
                                    onAdd={onAdd}/>):(
                                        <Link to="/Cart"><Button variant="contained" color="secondary">Terminar Mi Compra</Button></Link>
                                    )}
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail
