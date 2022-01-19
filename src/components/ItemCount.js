import { useState } from "react";

export const ItemCount =({stock, initial})=>{
    const [contador, setCounter] = useState(initial);
    const onAdd=()=>{
        contador < stock? setCounter(contador +1): setCounter(contador);
    }
    const restar=()=>{
        contador > initial? setCounter(contador -1): setCounter(contador);
    }
    return(<>
        <button className="btn btn-primary" onClick={restar}>-</button>
        <input value={contador} className="text-center"></input>
        <button className="btn btn-primary" onClick={onAdd}>+</button>
    </>
    );
}