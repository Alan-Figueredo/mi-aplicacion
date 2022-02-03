import { useEffect, useState } from "react";
export const ItemCount =({stock, initial})=>{
    const tamaño ={
        width:"250px",
        marginLeft: "auto",
        marginRight: "auto"
    }
    const [contador, setCounter] = useState(initial);


    //const botonRestar = document.getElementById(restar);
    const botonSumar = document.getElementById("sumar");
    const botonRestar = document.getElementById("restar");
    const divContador = document.getElementById("divContador")
    if(botonSumar){
        botonSumar.addEventListener("click", (evt)=>{
            evt.preventDefault();
            evt.stopPropagation();
            if(contador < stock){
                setCounter(contador+1)
            }
            else if(contador == stock){
                divContador.append("Limite de productos para comprar!")
            }
            else{
                setCounter(contador);
            }
            //contador < stock? setCounter(contador+1): setCounter(contador);
        });
    }
    if(botonRestar){
        botonRestar.addEventListener("click", (evt)=>{
            evt.preventDefault();
            evt.stopPropagation();
            contador > initial? setCounter(contador-1): setCounter(contador);
        });
    }


    return(<>
        <div className="row mb-2" style={tamaño} id="divContador">
            <button className="btn btn-primary col-sm-2 m-auto" id="restar">-</button>
            <p  className="text-center col-sm-2 my-auto">{contador}</p>
            <button className="btn btn-primary col-sm-2 m-auto"  id="sumar">+</button>
        </div>
        
    </>
    );
    
}