import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemCount } from "../ItemCount";
export const ItemDetail =()=>{
    const fuentePrecio ={
        fontSize: "20px"
    }
    const styleItem ={
        textAlign:"center",
        display: "inline-block",
        verticalAlign:"middle"
    }
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
            <div className="col-6  mt-3 mx-3 shadow text-center" style={styleItem}>
                <div className="card-body row">
                    <div className="col-sm-12">
                        <img className="imagen-card img-thumbnail" src={product.img}/>
                    </div>
                </div>
                <div className="card-body row">
                    <div className=" col-sm-12">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <p className="card-text">Stock disponible: {product.stock}</p>
                            <p style={fuentePrecio}><b>${product.price}</b></p>
                    </div>
                </div>

                <ItemCount stock={product.stock} initial={1}/>
                
                <div className="card-body row">
                    <div className="col-sm-2 card-body">
                        <button className="btn btn-primary">Comprar ahora</button>
                    </div>
                </div>
            </div>
    )
}