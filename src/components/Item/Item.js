import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { ItemCount } from "../ItemCount"

export const Item =({product})=>{
    return(
        <>
        <div className="card mt-3 mx-3">
            <div className="card-body">
                <img className="imagen-card img-thumbnail" src={product.img}/>
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <ItemCount stock={product.stock} initial={1}/>
            </div>
        </div>
    </>
    );
}
