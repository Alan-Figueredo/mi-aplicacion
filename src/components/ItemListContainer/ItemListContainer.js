import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../ItemListContainer/ItemListContainer.css"
import ItemList from "../ItemList/ItemList";
import { useAge } from "../../context/AgeContext";

const ItemListContainer =()=>{
    const {mayor, setMayor} = useAge();
    const {hidden, setHidden} = useAge();
    return(
        <div className="container" style={{display:"flex", flexDirection:"column", minHeight:"70vh"}}>
            <div className="card mt-5" style={{width:"80%", margin:"0 auto"}} hidden={hidden}>
                <h2 className="mt-3">Para ingresar a la pagina debes ser mayor de 18</h2>
                <p className="mb-5" style={{fontSize:"25px"}}>¿Eres mayor a 18?</p>
                <button className="mb-2 btn btn-primary" onClick={
                    (evt)=>{evt.preventDefault();
                        setMayor(true)
                        setHidden(true);
                    }
                    }
                    style={{width:"50%", margin:"0 auto"}}>Si</button>
                <button className="mb-5 btn btn-primary" onClick={
                    (evt)=>{evt.preventDefault();
                        setMayor(false)
                        setHidden(true);
                    }
                }
                style={{width:"50%", margin:"0 auto"}}>no</button>
            </div>
            {mayor === false &&  <div><p className="text-center" style={{fontSize:"25px"}}><b>¡No contas con la edad suficiente para entrar a la pagina!</b></p></div>}
            {mayor === true && <ItemList/>}
            
        </div>

    );
}
export default ItemListContainer;