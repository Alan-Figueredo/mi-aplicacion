import * as React from "react";
import { useCart } from "../../context/CartContext";

const Cart =()=>{
    const { cart, removeItem, clearAll } = useCart();
    return(
    <div>
        {cart.map((purchase)=>{
                return <div key={purchase.item.id}>
                    <p>{purchase.item.name}</p>
                    <p>{purchase.quantity}</p>
                    <button onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                    <button onClick={clearAll}></button>
                </div>
            })}
    </div>

    )
}
export default Cart;