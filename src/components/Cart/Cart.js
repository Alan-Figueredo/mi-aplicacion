import * as React from "react";
import { useCart } from "../../context/CartContext";

const Cart =()=>{
    const { cart, removeItem, clearAll } = useCart();
    return(
    <div>
        {cart.map((purchase)=>{
                return (
                <div className="mx-2" key={purchase.id}>
                    <div key={purchase.item.id} className="card text-center mt-3" style={{justifyContent:"center", height:"auto", width:"50%"}}>
                    <div className="row my-2 mx-2">
                        <div className="col-4">
                            <img src={purchase.item.img} alt={purchase.item.name} className="img-thumbnail"/>
                        </div>
                        <div className="col-8">
                            <p className="mt-2">Producto: {purchase.item.name}</p>
                            <p>Cantidad: {purchase.quantity}</p>
                            <p>Precio: ${parseInt(purchase.quantity * purchase.item.price)}</p>
                            <button className="btn btn-primary mt-5 mx-3" >Comprar</button>
                            <button className="btn btn-primary mt-5" onClick={()=>removeItem(purchase.item.id)}>Eliminar</button>
                        </div>
                    </div>
                    </div>
                    <button className="btn" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto", float:"right"}} onClick={clearAll}>Eliminar todos</button>
                </div>
            )})}
    </div>

    )
}
export default Cart;