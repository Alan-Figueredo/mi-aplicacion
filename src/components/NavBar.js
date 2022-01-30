import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link } from "react-router-dom";
function NavBar(){
    let nombreH1={
        color: "white",
        fontSize: "30px"
    }
    let navBarStyle = {
        backgroundColor: "grey"
    }
    let vinculo={
        color: "white",
        textDecorationLine: "none",
    }
    return(
        <div className="flexbox py-3" style={navBarStyle}>
            <div className="row">
                <div className="col mx-5">
                    <h1 style={nombreH1}>TusBebidasOnline</h1>
                </div>
                <div className="col  mt-2">
                    <Link to="" style={vinculo}>Inicio</Link>
                </div>
                <div className="col mt-2">
                    <Link to="" style={vinculo}>Tienda</Link>
                </div>
                <div className="col mt-2">
                    <Link to="" style={vinculo}>Sobre nosotros</Link>
                </div>
                <div className="col mt-2">
                    <Link to="" style={vinculo}>login</Link>
                </div>
                <div className="col">
                    <Link to=""><CartWidget Cart={Cart}/></Link>
                    
                </div>
                
            </div>
        </div>
    );
}
export default NavBar;