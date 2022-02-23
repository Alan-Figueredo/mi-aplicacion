import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";
import { getFirestore } from "../../firebase/index.js";


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
        <div className="row">
            {isLoading? (<p className="text-center">Cargando...</p>): (data.map((product)=>(
                    <div className="col-12 col-sm-3" key={product.id}>
                        <Item key={product.id} product={product} id={product.id}/>
                    </div>
            )))}
            
        </div>
    )
}
export default ItemList;