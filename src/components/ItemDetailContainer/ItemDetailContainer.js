import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetail } from "../itemDetail/ItemDetail"
export const ItemDetailContainer =()=>{
    return(
        <div className="container">
            <div className="row">
                <ItemDetail  className="col-12" />
            </div>
        </div>
        
    )
}