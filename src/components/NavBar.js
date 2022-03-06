import "bootstrap/dist/css/bootstrap.css";
import CartWidget from "./CartWidget/CartWidget.js";
import Cart from "../images/Cart.png"
import { Link, NavLink } from "react-router-dom";
import "../components/NavBar.css"
import { Dropdown } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getFirestore } from "../firebase/index";


function NavBar(){
    const [data, setData] = useState([])

    let nombreH1={
        color: "white",
        fontSize: "30px"
    }
    let navBarStyle = {
        backgroundColor: "grey",
        border:"none"
    }
    let vinculo={
        color: "white",
        textDecorationLine: "none",
    }

    const [dropdown, setDropdown] = useState(false);

    const nombreCategorias = [];
    data.forEach(element => {
        nombreCategorias.push({name: element.category, id: element.categoryID});
    });

    const nombreCategoriasMap = nombreCategorias.map(elemento=>{
        return [elemento.name, elemento]
    })
    const nombreCategoriasArr = new Map(nombreCategoriasMap);
    const unicos = [...nombreCategoriasArr.values()];

    const abriCerrarDrop = ()=>{
        setDropdown(!dropdown)
    }

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
        <div className="py-3" style={navBarStyle}>
            <div className="row">
                <div className="col-12 col-sm text-center mx-5">
                    <Link to="/" style={{textDecoration:"none"}}><h1 style={nombreH1} >TusBebidasOnline</h1></Link>
                </div>
                <div className="col  mt-2">
                    <NavLink to="/" style={vinculo}>Inicio</NavLink>
                </div>
                <Dropdown isOpen={dropdown} toggle={abriCerrarDrop} className="col-sm my-auto" >
                        <Dropdown.Toggle  style={navBarStyle} >
                            <span style={vinculo}>Categorias</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                        {unicos.map((product)=>(
                            <Dropdown.Item>
                                <NavLink to={"category/"+product.id} style={{textDecoration:"none", color:"black"}} >{product.name}</NavLink>
                            </Dropdown.Item>
                           )
                        )}

                        </Dropdown.Menu>
                </Dropdown>
                <div className="col mt-2">
                    <NavLink to="/aboutUs" style={vinculo}  >Sobre Nosotros</NavLink>
                </div>
                <div className="col">
                    <Link to="/cart"><CartWidget Cart={Cart}/></Link>
                    
                </div>
                
            </div>
        </div>
    );
}
export default NavBar;