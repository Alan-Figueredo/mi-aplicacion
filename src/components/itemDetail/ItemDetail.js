import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
export const ItemDetail =()=>{
    const { productID } = useParams();
    const [product, setProduct] =useState();
    const [isLoading, setIsLoading] =useState(false)
    useEffect(()=>{
        const URL = `http://localhost:3001/productos/${productID}`;
        setIsLoading(true)
        fetch(URL)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .finally(()=> setIsLoading(false))
    }, [productID]);
    if(isLoading || !product) return <p>Cargando...</p>
    return(
            <div className="card mt-3 mx-3 shadow">
                <div className="card-body row">
                    <div className="col-sm-4">
                        <img className="imagen-card img-thumbnail" src={product.img}/>
                    </div>
                    <div className=" col-sm-4">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="col-sm-2 card-body">
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
    )
}