import "bootstrap/dist/css/bootstrap.min.css"
import CartWidget from "../components/CartWidget.js";
import Cart from "../images/Cart.png"
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
                <div className="col mx-5">
                    <a href="#" style={vinculo}>Inicio</a>
                </div>
                <div className="col">
                    <a href="#" style={vinculo}>Tienda</a>
                </div>
                <div className="col">
                    <a href="#" style={vinculo}>Sobre nosotros</a>
                </div>
                <div className="col text-right">
                    <a href="#" style={vinculo}>login</a>
                </div>
                <CartWidget Cart={Cart}/>
            </div>
        </div>
    );
}
export default NavBar;