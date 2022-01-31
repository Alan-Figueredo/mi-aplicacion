import "../CartWidget/CartWidget.css"
import "bootstrap/dist/css/bootstrap.css"

const CartWidget = ({Cart})=>{
    return(
        <><img className=" cart" src={Cart} alt="cart" /></>
    );
}
export default CartWidget;