import { Link } from "react-router-dom"
import "../Etiquetas/Etiquetas.css"

export const EtiquetaCerveza = ()=>{
    return(
        <div className="card col-sm mx-2 shadow">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <p className="etiquetaTitulo" >Promo de verano</p>
                        <h3 className="promos">Hasta 10% off <br/> en Cervezas</h3>
                        <Link to="/category/1"><button className="btn btn-primary mt-2 mb-3">Ver más</button></Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img  className="img-fluid imagenesPromo" src="https://media.istockphoto.com/photos/beer-on-a-white-background-picture-id894278766?k=6&m=894278766&s=612x612&w=0&h=5HHeZNtXQy1sNLIBNU54R2_AK496Qq3OIQIK9fSiFgs="></img>
                    </div>
                </div>
        </div>
    )
}