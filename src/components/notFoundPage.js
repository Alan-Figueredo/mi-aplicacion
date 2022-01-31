import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
export const notFoundPage =()=>{
    <div className="text-center">
        <h1>Pagina no encontrada</h1>
        <Link to="/"><button className="btn btn-primary">Volver a la Home</button></Link>
    </div>
}
