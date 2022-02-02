import { useEffect, useState } from "react";

export const ItemCount =({stock, initial})=>{
    const tamaño ={
        width:"250px",
        marginLeft: "auto",
        marginRight: "auto"
    }
    const [contador, setCounter] = useState(initial);
    const sumar=()=>{
        contador < stock? setCounter(contador +1): setCounter(contador);
    }
    const restar=()=>{
        contador > initial? setCounter(contador -1): setCounter(contador);
    }
    useEffect(()=>{
        document.getElementById("restar").addEventListener("restar", restar);
        document.getElementById("sumar").addEventListener("sumar", sumar);
    })
    return(<>
        <div className="row mb-2" style={tamaño}>
            <button className="btn btn-primary col-sm-2 m-auto" onClick={restar} id="restar">-</button>
            <p  className="text-center col-sm-2 my-auto">{contador}</p>
            <button className="btn btn-primary col-sm-2 m-auto" onClick={sumar} id="sumar">+</button>
        </div>
        
    </>
    );
}