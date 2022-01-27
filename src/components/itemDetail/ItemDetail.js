import "bootstrap/dist/css/bootstrap.min.css"
export const ItemDetail =({product})=>{
    return(
        <>
            <div className="card mt-3 mx-3 shadow">
                <div className="card-body row">
                    <div className="col-sm-4">
                        <img className="imagen-card img-thumbnail" src={product.img}/>
                    </div>
                    <div className=" col-sm-4">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                    <div className="col-sm-2 card-body">
                        <button className="btn btn-primary">Comprar</button>
                    </div>
                </div>
            </div>
        </>
    );
}