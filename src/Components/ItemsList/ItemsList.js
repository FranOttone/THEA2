import ItemCard from '../ItemsCard/ItemCard';
import { itemsData } from '../Data/ItemData';
import {Link} from 'react-router-dom'


//
//
function ItemsList() {

    return (
        <div>
            {itemsData.map((item)=>{
                return(

                    <div key={item.id}>
                        <Link to={`/top/detail/${item.id}`}>
                        <ItemCard item={item}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsList
