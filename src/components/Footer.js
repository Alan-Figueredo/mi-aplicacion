import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
export const Footer =()=>{
    let iconos={
        fontSize:"25px", marginRight:"15px"
    }
    return(
            <footer className="bg-dark text-white mt-5" style={{marginTop:"auto", width:"100%"}}>
                <div className="row">
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3" style={{marginLeft:"10px"}}>TusBebidasOnline</h2>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3">Contacto</h2>
                        <FontAwesomeIcon icon={faInstagram} style={iconos} />
                        <FontAwesomeIcon icon={faWhatsapp} style={iconos}/>
                        <FontAwesomeIcon icon={faFacebook} style={iconos}/>
                        <FontAwesomeIcon icon={faEnvelope} style={iconos}/>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3">Horarios</h2>
                        <p>⚪Lun a vie: 9-18hs</p>
                        <p>⚪Sab: 9-13hs</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <p className="text-center">© 2022 Copyright TusBebidasOnline</p>
                    </div>
                </div>
            </footer>
    )
}