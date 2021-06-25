import React,{useEffect,useState} from 'react'
import ItemCard from '../ItemsCard/ItemCard';
import { itemsData } from '../Data/ItemData';
import {Link} from 'react-router-dom'


//
//
function ItemsList() {
const [items, setItems] = useState([]);

useEffect(()=>{
    const promesa= new Promise ((resolve,reject)=>
    {
        resolve(setItems(itemsData))
    });
promesa.then(result =>{

})
    
},[items])
    return (
        <div>
            {items.map((item)=>{
                return(

                    <div key={item.id}>
                        <Link to={`/top/detail/${item.id}`}>
                        <ItemCard data={item}/>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemsList
