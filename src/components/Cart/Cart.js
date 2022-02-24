import * as React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import UserData from "../UserData";

const Cart =()=>{
    const { cart, removeItem, clearAll } = useCart();

    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }


    return(
        <div>
            <div className="card mt-3" style={{width:"95rem", marginLeft:"auto", marginRight:"auto"}}>
                <h3 className="text-left">Carrito</h3>
                {cart[0] == null && <div className="my-5"><h2>Ups! Parece que no tenes nada en el carrito.</h2><p>¡Volve a la tienda para encontrar los productos que necesitas!</p><Link to="/"><button className="btn btn-primary mt-3">Volver a la tienda</button></Link></div>}
                {cart.map((purchase)=>{
                        return (
                        <div className="mx-2" key={purchase.item.id}>
                            
                            <div  className=" text-center mt-3" style={{justifyContent:"center", width:"90%", height:"50%"}}>
                            <div className="row my-2 mx-2">
                                <div className="col-2">
                                    <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                                </div>
                                <div className="col-10">
                                    <p className="mt-2">Producto: {purchase.item.name}</p>
                                    <p>Cantidad: {purchase.quantity}</p>
                                    <p>Precio: ${parseInt(purchase.quantity * purchase.item.price)}</p>
                                    <button className="btn btn-primary mt-3" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                                </div>
                            </div>
                            </div>
                            <hr/>
                        </div>
                    )})}
                    {cart[0] != null && <h3 style={{textAlign:"right", marginRight:"10px"}}>Total ${getTotal(cart)}</h3>}
                    {cart[0] != null && <button className="btn mt-5" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto", float:"right"}} onClick={clearAll}>Eliminar todos</button>}
            </div>

            {cart[0] != null && <UserData/>
            } 
        </div>
    

    )
}
export default Cart;