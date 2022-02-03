import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ItemCount } from "../ItemCount";
export const ItemDetail =()=>{
    const fuentePrecio ={
        fontSize: "20px"
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


    if(isLoading || !product) return <p className="text-center mt-5" style={{fontSize:"30px"}}>Cargando...</p>
    return(
            <div className="shadow text-center card mt-5" style={{justifyContent:"center", marginLeft:"auto", marginRight:"auto", width:"50%"}}>
                <div className="card-body row">
                    <div className="col-sm-12">
                        <img className="imagen-card img-thumbnail" src={product.img} alt={product.name}/>
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

                <ItemCount stock={product.stock} initial={1} />
                
                <div className="mt-3 row">
                    <div className="col-sm-2 card-body">
                    <Link to="/cart"><button className="btn btn-primary" style={{width:"auto"}}>Comprar ahora</button></Link>
                    </div>
                </div>
                <div className="mb-3 row">
                    <div className="col-sm-2 card-body">
                        <button className="btn" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto"}}>Agregar al carrito</button>
                    </div>
                </div>
            </div>
    )
}