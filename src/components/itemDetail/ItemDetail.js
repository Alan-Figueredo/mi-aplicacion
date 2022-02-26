import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getFirestore } from "../../firebase";
import { ItemCount } from "../ItemCount";
export const ItemDetail =()=>{
    const fuentePrecio ={
        fontSize: "20px",
    }
    const { addItem } = useCart();
    const [disabled, setDisabled] = useState(false);
    const [counter, setCounter] = useState(1);
    const { productID } = useParams();
    const [product, setProduct] =useState({});
    const [isLoading, setIsLoading] =useState(false)
    useEffect(()=>{
        const db = getFirestore() 
        const productCollection = db.collection("productos");
        const selectedProduct = productCollection.doc(productID);

        setIsLoading(true);
        selectedProduct
            .get()
            .then((response)=> {
            if(!response.exists) console.log("el producto no existe");
            setProduct({...response.data(), id: response.id})
        })
        .finally(()=> setIsLoading(false)); 
    }, [productID]);

    const handleClick=()=>{
        addItem(product,counter);
    };
    const sumar=()=>{
        if(counter < product.stock){
            setCounter((prevState)=>prevState+1)
        }else{
            setDisabled(true)
        }
    }
    const restar=()=>{
        if(counter > 1){
            setCounter((prevState)=>prevState-1)
            setDisabled(false)
        }else{
            setCounter(counter);
        }
    }

    if(isLoading || !product) return <p className="text-center" style={{fontSize:"20px", marginTop:"17%", marginBottom:"18%"}}>Cargando los productos...</p>
    return(
            <div className="shadow text-center card mt-5" style={{justifyContent:"center", marginLeft:"auto", marginRight:"auto", width:"50%", display:"flex", flexDirection:"column", minHeight:"70vh"}}>
                <div className="card-body row">
                    <div className="col-sm-7">
                        <img className="img-fluid img-thumbnail" src={product.img} alt={product.name}/>
                    </div>
                    <div className="col-sm-5" >
                        <h5 className="card-title" style={{fontSize:"30px", height:"20%"}}>{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">Stock disponible: {product.stock}</p>
                        <p className="my-4" style={fuentePrecio} ><b>${product.price}</b></p>
                        <ItemCount  sumar={sumar} restar={restar} counter={counter} setCounter={setCounter} disabled={disabled}/>
                        {counter === product.stock && <div className="alert alert-danger" role="alert" style={{marginLeft:"auto", marginRight:"auto", marginTop:"10px"}}>Llegaste al limite de stock!</div>}
                        <div className="mb-3 row">
                            <div className="col-sm-2 card-body">
                                <button onClick={handleClick} className="btn" style={{backgroundColor:"rgba(65,137,230,.15)", color:"#3483fa", width:"auto"}}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                    
                </div>

                
            </div>
    )
}