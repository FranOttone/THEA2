import ItemCount from '../../Components/itemCount/ItemCount'
import { itemsData } from '../../Components/Data/ItemData';
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { CartContext } from '../../Components/CartContex/CartContex';



function ItemDetail({match}) {
    const {addItem}= useContext(CartContext)
const itemID =match.params.id

const filtro =itemsData.filter(function(item){
   
   
return item.id ===itemID
   })





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
                      
                        <ItemCount stock={item.stock}
                                    initial={1}
                                    addItem={addItem}/>):(
                                        <Link to="/Cart"><Button variant="contained" color="secondary">Terminar Mi Compra</Button></Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemDetail
