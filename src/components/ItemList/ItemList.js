import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Item } from "../Item/Item.js";


function ItemList ({product}){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const URL = "http://localhost:3001/productos"
        setIsLoading(true)
        fetch(URL)
        .then((response)=> response.json())
        .then((json) =>setProducts(json))
        .catch((error)=> {console.error(error)})
        .finally(()=> setIsLoading(false))
    }, []);
    return(
        <div className="row">
            {isLoading? (<p className="text-center">Cargando...</p>): (products.map((product)=>(
                    <div className="col" key={product.id}>
                        <Item key={product.id} product={product} id={product.id}/>
                    </div>
            )))}
            
        </div>
    )
}
export default ItemList;