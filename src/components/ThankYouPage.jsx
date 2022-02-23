import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getFirestore } from "../firebase";


const ThankYouPage =()=>{
    const { orderId } = useParams()
    const [order, setOrder] = useState({})
    const { cart } = useCart()
    useEffect(()=>{
        const db = getFirestore();
        db.collection("orders")
        .doc(orderId)
        .get()
        .then((res)=> setOrder({ id: res.id, ...res.data() }))
    }, [orderId])    

    return (
        <div className="card text-center mt-5" style={{justifyContent:"center", marginLeft:"auto", marginRight:"auto", width:"80%"}}>
            <h2>Gracias por tu compra {order?.buyer?.name}! </h2>
            <h3>Detalle de su compra:</h3>
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
                                </div>
                            </div>
                            </div>
                        </div>
                    )})}
            <Link to="/"><button className="btn btn-primary mt-3 mb-4">Volver a la tienda</button></Link>
        </div>
    )
}

export default ThankYouPage;