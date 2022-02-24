import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";
import { EtiquetaCerveza } from "../EtiquetaCerveza.js";
import { EtiquetaRon } from "../EtiquetaRon.js";


function ItemList (){
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const db = getFirestore() 
        const productsCollection = db.collection("productos");
        const getDataFromFirestore = async ()=>{
            const response = await productsCollection.get();
            setData(response.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        }
        getDataFromFirestore();
    }, []);
    return(
        <div>
            <div className="row mx-5 mt-5">
                <p style={{fontSize:"26px", color:"#666"}}>Ofertas</p>
                <EtiquetaCerveza/>
                <EtiquetaRon/>
            </div>
            <div className="row mx-5 mt-3 mb-3">
                <p style={{fontSize:"26px", color:"#666"}}>Productos</p>
                {isLoading? (<p className="text-center">Cargando...</p>): (data.map((product)=>(
                        <div className="col-12 col-sm-3" key={product.id}>
                            <Item key={product.id} product={product} id={product.id}/>
                        </div>
                )))}
            </div>
        </div>
    )
}
export default ItemList;