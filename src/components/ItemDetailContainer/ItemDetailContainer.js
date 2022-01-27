import "bootstrap/dist/css/bootstrap.min.css"
import { ItemDetail } from "../itemDetail/ItemDetail"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
export const ItemDetailContainer =({product})=>{

    return(
        <Router>
            <Switch>
                <Router>
                    <ItemDetail product={product}/>
                </Router>
            </Switch>
        </Router>
    )
}