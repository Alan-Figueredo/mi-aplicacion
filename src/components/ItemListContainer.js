import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/ItemListContainer.css"
const ItemListContainer =({name,description,image})=>{
    return(
        <>
            <div className="card mt-3 mx-3">
                <div className="card-body">
                    <img className="imagen-card img-thumbnail" src={image}/>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </>
    );
}
export default ItemListContainer;