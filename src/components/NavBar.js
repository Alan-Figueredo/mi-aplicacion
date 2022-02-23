import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link, NavLink } from "react-router-dom";
import "../components/NavBar.css"
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
                <div className="col-12 col-sm text-center mx-5">
                    <Link to="/" style={{textDecoration:"none"}}><h1 style={nombreH1} >TusBebidasOnline</h1></Link>
                </div>
                <div className="col  mt-2">
                    <NavLink to="/" style={vinculo}>Inicio</NavLink>
                </div>
                <div className="col mt-2">
                    <NavLink to="/category/1" style={vinculo} >Cervezas</NavLink>
                </div>
                <div className="col mt-2">
                    <NavLink to="/category/2" style={vinculo} >Ron</NavLink>
                </div>
                <div className="col mt-2">
                    <NavLink to="" style={vinculo}  >login</NavLink>
                </div>
                <div className="col">
                    <Link to="/cart"><CartWidget Cart={Cart}/></Link>
                    
                </div>
                
            </div>
        </div>
    );
}
export default NavBar;