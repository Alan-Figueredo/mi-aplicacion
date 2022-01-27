import "bootstrap/dist/css/bootstrap.min.css"
import { ItemCount } from "../ItemCount"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { ItemDetail } from "../itemDetail/ItemDetail";
export const Item =({product})=>{
    return(
        <Router>
            <div className="card mt-3 mx-3 shadow">
                <div className="card-body">
                    <img className="imagen-card img-thumbnail" src={product.img}/>
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <Link to="/producto"><button className="btn btn-light mb-3">Ver detalle</button></Link>
                    <ItemCount stock={product.stock} initial={1} />
                </div>
            </div>
            <Switch>
                <Route path="/producto">
                    <ItemDetail product={product}/>
                </Route>
            </Switch>
        </Router>
    );
}
