import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { getProductos } from "../mocks/baseDeDatos.js";
import { Item } from "../Item/Item.js";


function ItemList (){
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getProductos()
        .then((data)=> {setProducts(data)})
        .catch((error)=> {console.error(error)})
        .finally(()=> setIsLoading(false))
    }, []);
    return(
        <div className="row">
            {isLoading? (<p className="text-center">Cargando...</p>): (products.map((product)=>(
                    <div className="col" key={product.id}>
                        <Item key={product.id} product={product}/>
                    </div>
            )))}
            
        </div>
    )
}
export default ItemList;