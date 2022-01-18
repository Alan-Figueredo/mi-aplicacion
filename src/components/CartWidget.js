import "../components/CartWidget.css"
import "bootstrap/dist/css/bootstrap.css"

const CartWidget = ({Cart})=>{
    return(
        <><img className=" cart" src={Cart}/></>
        
    );
}
export default CartWidget;