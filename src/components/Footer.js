
export const Footer =()=>{
    return(
            <footer className="bg-dark text-white" style={{marginTop:"auto", width:"100%"}}>
                <div className="row">
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3" style={{marginLeft:"10px"}}>TusBebidasOnline</h2>
                    </div>
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3">Contacto</h2>

                    </div>
                    <div className="col-sm-4">
                        <h2 className="mt-4 mb-3">Horarios</h2>
                        <p>Lun a vie: 9-18hs</p>
                        <p>Sab: 9-13hs</p>
                    </div>
                </div>
                
                <p className="text-center">© 2022 Copyright TusBebidasOnline</p>
            </footer>
    )
}