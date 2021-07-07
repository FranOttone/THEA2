import React, { createContext, useEffect, useState} from 'react';

export const CartContext = createContext([
]);

const CartProvider = (props) => {
const [cart,setCart]=useState([]);  
// eslint-disable-next-line no-unused-vars
const [productos,setProductos]=useState([
  
    {"id":"1","name":"SWEATER ASPEN","price":"5200","stock":"14","img":"https://res.cloudinary.com/fran02/image/upload/c_scale,h_400,w_350/v1624563254/aspen_mmpasf.jpg","count":1},
    {"id":"2","name":"CHALECO TEXAS","price":"2580","stock":"8","img":"https://res.cloudinary.com/fran02/image/upload/c_scale,h_400,w_350/v1624563254/texas_wgisqe.jpg","count":1},
    {"id":"3","name":"CAMISA VIENA ","price":"3280","stock":"10","img":"https://res.cloudinary.com/fran02/image/upload/c_scale,h_400,w_350/v1624563254/viena_rqn5gv.jpg","count":1},
    {"id":"4","name":"BUZO NEW YORK ","price":"3360","stock":"5","img":"https://res.cloudinary.com/fran02/image/upload/c_scale,h_400,w_350/v1624563254/new_york_zetzc2.jpg","count":1}
 
]);

const [total, setTotal]=useState();

const [variable, setVariable ]=useState(true);


const reducir=(id)=>{
cart.forEach((item)=>{
  if(item.id===id){
    item.count ===1? item.count=1 :item.count-=1;
  }
})
setCart(cart)
};

const aumentar=(id)=>{
  cart.forEach((item)=>{
    if(item.id===id){
      item.count +=1 
    }
  })
  setCart(cart)
};

const addToCart= (id) =>{
  
  const check =cart.every(product=>{
    return product.id !== id
  })
  console.log (check)
  if(check){
    const data= productos.filter(product=>{
    return product.id === id
  }) ;
  setCart([...cart,...data])
  }
  else{
    alert("El producto ya fue agregado")
  }
  setVariable(!true)
};

const removeProduct=(id)=>{
cart.forEach((item, index)=>{
  if(item.id === id){
    cart.splice(index,1)
  }
})
setCart(cart)
};

const getTotal= () =>{
  const res=cart.reduce((prev,item)=>{
    return prev+(item.price * item.count);
  },0)
  setTotal(res)
}


  return <CartContext.Provider
    value={{cart,productos,addToCart,aumentar,reducir,removeProduct,getTotal,total,variable}}
  >{props.children}</CartContext.Provider>;
};

export default CartProvider;