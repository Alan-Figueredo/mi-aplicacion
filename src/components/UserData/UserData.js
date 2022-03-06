import { useState } from "react";
import { getFirestore } from "../../firebase";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
const UserData = ()=>{
    const { cart, clearAll } = useCart();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [hidden, setHidden] = useState(true);
    let navigate = useNavigate();

    const getTotal = (cart) =>{
        let total = 0;
        cart.forEach((element) => {
            total += element.item.price * element.quantity;
        });
        return total;
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()

        if(!name || !phone){
            return false;
        }
        const newOrder = { 
            buyer: {name, phone},
            items: cart,
            total: getTotal(cart)
        };
        
        const db = getFirestore();
        db.collection("orders")
        .add(newOrder)
        .then((res)=> {
            navigate(`/thanks/${res.id}`)
        })
        .catch((err) => console.log(err))
        clearAll();
    }
    return(
    <div className="card mt-3 mb-5" id="cardUserData">
        <h2 className="my-3">Introduzca sus datos</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" placeholder="Escriba su nombre" className="form-control" value={name} onChange={(e)=> {setName(e.target.value); setHidden(true) }}/>
            <label htmlFor="phone">Telefono</label>
            <input type="number" id="phone" name="phone" placeholder="Escriba su numero de telefono" className="form-control" value={phone} onChange={(e)=> {setPhone(e.target.value); setHidden(true) }}/>
            <input type="submit" value="Finalizar compra"  onClick={()=> (!name || !phone) && setHidden(false)}  className="my-4 btn btn-primary"/>

            <div className="alert alert-danger" hidden={hidden} role="alert" id="alertaDatos">Ingresa los datos correspondientes!</div>
        </form>
    </div>)
}

export default UserData;