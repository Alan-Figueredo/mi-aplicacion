import { Link } from "react-router-dom"


export const EtiquetaRon = ()=>{
    return(
        <div className="card col-sm mx-2 shadow">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <p style={{fontSize:"16px", marginTop:"20px", color:"#4b4b4b"}}>Vigente hasta el finde! </p>
                        <h3 style={{fontSize:"30px", fontWeight:"490"}}>Hasta 15% off <br/> en Rones</h3>
                        <Link to="/category/2"><button className="btn btn-primary mt-2 mb-3">Ver más</button></Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        <img style={{marginTop:"15px", marginBottom:"15px", height:"200px"}} className="img-fluid" src="https://th.bing.com/th/id/OIP.SvImgAs3Ia6YuLn52IixbwHaHa?pid=ImgDet&rs=1"></img>
                    </div>
                </div>
        </div>
    )
}